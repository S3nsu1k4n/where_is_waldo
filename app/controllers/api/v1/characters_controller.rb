class Api::V1::CharactersController < ApplicationController
  def index
    game_id = params[:game_id]
    p game_id
    p '#####################'
    render json: { game_id: }
  end

  def show
  
  end
end
