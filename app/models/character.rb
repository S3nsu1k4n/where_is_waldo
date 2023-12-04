class Character < ApplicationRecord
  belongs_to :game

  validates :name, :xcenter, :ycenter, :width, :height, :game_id, presence: true
  validates :name, length: { in: 3..20 }
  validates :xcenter, :ycenter, :width, :height, numericality: { only_float: true }
  validates :xcenter, :ycenter, :width, :height, numericality: { in: 0..1 }
end
