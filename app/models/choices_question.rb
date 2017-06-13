class ChoicesQuestion < ApplicationRecord
  belongs_to :question
  belongs_to :choice
  has_many :answers
end
