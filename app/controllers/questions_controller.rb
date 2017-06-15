class QuestionsController < ApplicationController
  def index
    @question = Question.first
    @choices = @question.choices

    # Add conditional to check if survey has already been taken
    # or if survey is still in progress
    session[:survey_round_id] = SurveyRound.create().id
    session[:question_id] = @question.id
    @survey_round_id = session[:survey_round_id]
  end
end
