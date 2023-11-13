class Game < ApplicationRecord
  has_many :characters

  def get_character(name)
    characters.where(name:).first
  end
end
