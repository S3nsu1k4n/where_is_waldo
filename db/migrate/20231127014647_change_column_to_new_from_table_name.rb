class ChangeColumnToNewFromTableName < ActiveRecord::Migration[7.0]
  def change
    change_column :leaderboards, :time_finished, :time
  end
end
