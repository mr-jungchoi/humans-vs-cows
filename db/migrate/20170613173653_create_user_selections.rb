class CreateUserSelections < ActiveRecord::Migration[5.0]
  def change
    create_table :user_selections do |t|
      t.references :survey_round, index: true, foreign_key: true
      t.references :choice, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
