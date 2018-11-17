class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.integer :deck_id 
      t.text :front
      t.text :back

      t.timestamps
    end
    add_index :cards, :deck_id
  end
end
