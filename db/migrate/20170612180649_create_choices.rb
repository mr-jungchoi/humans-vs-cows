class CreateChoices < ActiveRecord::Migration[5.0]
  def change
    create_table :choices do |t|
      t.string   :text, null: false
      t.boolean  :is_correct, default: false
      t.references :question, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
