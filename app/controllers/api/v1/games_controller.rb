class Api::V1::GamesController < ApplicationController
  def index
    @games = Game.all
    render json: @games, include: ['characters'], meta: { total: Game.count }
  end

  def show
    id = params[:id]
    @game = Game.find(id)
    render json: @game, include: ['characters'], meta: { total: Game.count }
  end
end
