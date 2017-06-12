class Answer < ActiveRecord::Base
  belongs_to :survey_round
  belongs_to :question
  belongs_to :choice
end
