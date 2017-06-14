class UserSelectionsController < ApplicationController
  def create
    user_selection = UserSelection.create(user_selection_params)

    if user_selection
      session[:question_id] += 1

      @question = Question.find_by_id(session[:question_id])
    end
  end

  def user_selection_params
    params.require(:user_selection).permit(:choice_id, :survey_round_id)
  end
end
