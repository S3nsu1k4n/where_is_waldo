class Api::V1::CharactersController < ApplicationController
  def index
    @characters = Character.all
    render json: @characters, only: [:id, :name, :game_id]
  end

  def show
    @character = Character.find(params[:id])
    render json: @character, only: [:id, :name, :game_id]
  end
end
