class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.references :survey_round, index: true, foreign_key: true
      t.references :choices_question, foreign_key: true

      t.timestamps null: false
    end
  end
end
