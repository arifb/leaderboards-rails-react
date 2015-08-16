class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string     :first_name
      t.string     :last_name
      t.integer    :games_played
      t.integer    :wins
      t.integer    :losses
      t.references :user
      t.references :division
    end
  end
end
