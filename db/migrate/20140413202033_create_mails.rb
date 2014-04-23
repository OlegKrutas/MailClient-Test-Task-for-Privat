class CreateMails < ActiveRecord::Migration
  def change
    create_table :mails do |t|
      t.string :from
      t.string :email
      t.string :to
      t.string :date
      t.string :subject
      t.string :text
      t.string :status

      t.timestamps
    end
  end
end
