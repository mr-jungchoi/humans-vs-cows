class UserSelection < ApplicationRecord
  belongs_to :survey_round
  has_one :choice
  has_one :question, through: :choice
end
