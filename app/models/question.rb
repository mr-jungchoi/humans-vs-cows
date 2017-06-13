class Question < ActiveRecord::Base
  has_many :choices_questions
  has_many :choices, through: :choices_questions
end
