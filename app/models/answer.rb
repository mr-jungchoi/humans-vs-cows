class Answer < ApplicationRecord
  belongs_to :survey_round
  has_one :choices_question
  has_one :choice, through: :choices_question
  has_one :question, through: :choices_question
end
