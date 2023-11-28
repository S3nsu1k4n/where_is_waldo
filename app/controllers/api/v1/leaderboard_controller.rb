class Api::V1::LeaderboardController < ApplicationController
  def index
    @leaderboard = Leaderboard.all
    @leaderboard = @leaderboard.map {|entry| { name: entry.name, time_finished: entry.only_time, created_at: entry.created_at} }
    render json: @leaderboard, meta: { total: @leaderboard.count }
  end

  def create
    @leaderboard = Leaderboard.new(finished_params)
    if @leaderboard.save
      render json: { success: true }
    else
      render json: { success: false }, status: :unprocessable_entity
    end
  end

  protected

  def finished_params
    params.require(:leaderboard).permit(:name, :time_finished)
  end
end
