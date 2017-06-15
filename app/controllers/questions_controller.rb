class QuestionsController < ApplicationController
  def index
    @question = Question.first
    @choices = @question.choices

    # Add conditional to check if survey has already been taken
    # or if survey is still in progress
    # before creating a new survey round
    session[:survey_round_id] = SurveyRound.create().id
    session[:question_id] = @question.id
    @survey_round_id = session[:survey_round_id]
  end

  def next
    question = Question.find_by_id(session[:question_id])
    next_question = {question: question,
                     choices: question.choices,
                     survey_round_id: session[:survey_round_id]}

    render json: next_question
  end
end
