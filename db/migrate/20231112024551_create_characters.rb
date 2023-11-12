class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.float :xcenter
      t.float :ycenter
      t.float :width
      t.float :height

      t.timestamps
    end
  end
end
