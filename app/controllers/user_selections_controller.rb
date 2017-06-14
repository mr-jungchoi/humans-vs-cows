class UserSelectionsController < ApplicationController
  def create
    user_selection = UserSelection.new(user_selection_params)

    if user_selection.save
      session[:question_id] += 1
      question = Question.find_by_id(session[:question_id])
      next_question = {question: question, choices: question.choices}

      render json: next_question
    end
  end

  def user_selection_params
    params.require(:user_selection).permit(:choice_id, :survey_round_id)
  end
end
