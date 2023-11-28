class Leaderboard < ApplicationRecord

  def only_time
    time_finished.strftime("%T")
  end
end
