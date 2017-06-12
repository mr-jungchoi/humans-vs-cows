class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.boolean  :is_correct, null: false
      t.references :survey_round, index: true, foreign_key: true
      t.references :question, index: true, foreign_key: true
      t.references :choice, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
