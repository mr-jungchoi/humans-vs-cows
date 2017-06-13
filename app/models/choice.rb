class Choice < ActiveRecord::Base
  has_many :choices_questions
  has_many :questions, through: :choices_questions
end
