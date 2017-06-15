class UserSelectionsController < ApplicationController
  def create
    user_selection = UserSelection.new(user_selection_params)

    if user_selection.save
      # Include conditional to see if there is no more questions
      session[:question_id] += 1
    else
      # Do something else
    end
  end

  def user_selection_params
    params.require(:user_selection).permit(:choice_id, :survey_round_id)
  end
end
