class Survey < ApplicationRecord
  has_many :survey_rounds
  has_many :questions
end
