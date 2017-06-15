class AdminController < ApplicationController
  def index
    @questions = Question.all
  end
end
