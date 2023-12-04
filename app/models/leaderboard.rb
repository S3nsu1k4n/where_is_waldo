class Leaderboard < ApplicationRecord
  validates :name, :time_finished, presence: true
  validates :name, length: { in: 3..20 }

  scope :best, ->(num) { order(:time_finished).limit(num) }

  def only_time
    time_finished.strftime("%T")
  end

  def best_3
    order_by(:time_finished)
  end
end
