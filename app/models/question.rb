class Question < ActiveRecord::Base
  has_many :choices
  has_many :answers
end
