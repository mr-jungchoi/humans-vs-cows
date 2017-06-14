class CreateSurveyRounds < ActiveRecord::Migration[5.0]
  def change
    create_table :survey_rounds do |t|
      t.integer  :percent_correct

      t.timestamps null: false
    end
  end
end
