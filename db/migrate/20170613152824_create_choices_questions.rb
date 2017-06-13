class CreateChoicesQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :choices_questions do |t|
      t.boolean  :is_correct, default: false
      t.references :choice, index: true, foreign_key: true
      t.references :question, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
