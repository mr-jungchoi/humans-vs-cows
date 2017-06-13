# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170613173653) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.integer  "survey_round_id"
    t.integer  "choices_question_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.index ["choices_question_id"], name: "index_answers_on_choices_question_id", using: :btree
    t.index ["survey_round_id"], name: "index_answers_on_survey_round_id", using: :btree
  end

  create_table "choices", force: :cascade do |t|
    t.string   "text",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "choices_questions", force: :cascade do |t|
    t.boolean  "is_correct",  default: false
    t.integer  "choice_id"
    t.integer  "question_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["choice_id"], name: "index_choices_questions_on_choice_id", using: :btree
    t.index ["question_id"], name: "index_choices_questions_on_question_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.text     "text",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "survey_rounds", force: :cascade do |t|
    t.integer  "percent_correct", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "answers", "choices_questions"
  add_foreign_key "answers", "survey_rounds"
  add_foreign_key "choices_questions", "choices"
  add_foreign_key "choices_questions", "questions"
end
