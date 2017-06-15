class UserSelectionsController < ApplicationController
  def create
    user_selection = UserSelection.create(user_selection_params)
    current_question = Question.find_by_id(session[:question_id])

    if user_selection && current_question == Question.last
      redirect_to "/facts"
    elsif user_selection
      session[:question_id] += 1
    else
      # Server side error handling for invalid user selection
    end
  end

  def user_selection_params
    params.require(:user_selection).permit(:choice_id, :survey_round_id)
  end
end
