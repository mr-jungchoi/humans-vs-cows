class ChoicesController < ApplicationController
  def update
    choice = Choice.find_by_id(params[:id])

    if choice.update_attributes(choice_params)
      # send back status 200
      head status: 200
    else
      # send back status 500
      head status: 500
    end
  end

  private
    def choice_params
      params.require(:choice).permit(:text, :is_correct)
    end
end
