class QuestionsController < ApplicationController
  def show
    @question = Question.find_by_id(params[:id])
    @choices = @question.choices
  end
end
