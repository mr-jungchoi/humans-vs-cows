class QuestionsController < ApplicationController
  def index
    @question = Question.first
    @choices = @question.choices

    session[:survey_round_id] = SurveyRound.create().id
    session[:question_id] = @question.id
  end
end
