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

ActiveRecord::Schema.define(version: 2020_02_04_084407) do

  create_table "account_transactions", force: :cascade do |t|
    t.integer "account_id"
    t.integer "transaction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_account_transactions_on_account_id"
    t.index ["transaction_id"], name: "index_account_transactions_on_transaction_id"
  end

  create_table "accounts", force: :cascade do |t|
    t.string "name"
    t.string "number"
    t.string "utilization"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "client_accounts", force: :cascade do |t|
    t.integer "client_id"
    t.integer "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_client_accounts_on_account_id"
    t.index ["client_id"], name: "index_client_accounts_on_client_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "socialsec"
    t.string "dob"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.float "amount"
    t.string "description"
    t.string "type"
    t.string "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
