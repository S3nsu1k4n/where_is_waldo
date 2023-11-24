class Api::V1::LeaderboardController < ApplicationController
  def index
    @leaderboard = Leaderboard.all
    render json: @leaderboard, meta: { total: @leaderboard.count }
  end

  def create
  end
  
end
