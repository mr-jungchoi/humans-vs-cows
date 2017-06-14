class AnswersController < ApplicationController
  def create
    choices_question = ChoicesQuestion.find_by(
      question_id: answer_params[:question_id],
      choice_id: answer_params[:choice_id]
    )

    answer = Answer.create(
      survey_round_id: answer_params[:survey_round_id],
      choices_question_id: choices_question.id
    )

    if answer
    end
  end

  def answer_params
    params.require(:answer).permit(:question_id, :choice_id, :survey_round_id)
  end
end
