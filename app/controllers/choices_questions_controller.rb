class ChoicesQuestionsController < ApplicationController
  def create
    redirect_to "/questions/#{params[question][id] + 1}"
  end
end
