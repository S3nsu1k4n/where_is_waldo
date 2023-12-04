class Game < ApplicationRecord
  has_many :characters

  validates :img_url, presence: true

  def get_character(name)
    characters.where(name:).first
  end
end
