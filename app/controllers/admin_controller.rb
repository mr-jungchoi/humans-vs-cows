class AdminController < ApplicationController
  def index
    # Data should follow the format:
    # [
    #   {id: 1, text: "string", choices: [{id: 1, text: "string"}, {..}]},
    #   {..}
    # ]
    @questions = []
    Question.order(:id).each do |question|
      @questions.push({id: question.id, text: question.text, choices: question.choices})
    end
  end
end
