class QuestionsController < ApplicationController
  def show
    @question = Question.find_by_id(params[:id])
    @choices = @question.choices

    # Need to add survey round id
    # @survey_round = @question.survey_round.id
  end
end
