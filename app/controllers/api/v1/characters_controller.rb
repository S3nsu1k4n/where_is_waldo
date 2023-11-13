class Api::V1::CharactersController < ApplicationController
  def index
    game_id = params[:game_id]
    p game_id
    p '#####################'
    p params
    render json: { game_id: }
  end

  def show
    eval_params = evaluation_params
    p '###########################'
    p eval_params
    p Character.where(game_id: eval_params[:game_id], name: eval_params[:name])

    render json: { eval_params: }
  end

  protected

  def evaluation_params
    params.permit(:context, :name, :xcenter, :ycenter, :width, :height, :game_id)
  end
end
