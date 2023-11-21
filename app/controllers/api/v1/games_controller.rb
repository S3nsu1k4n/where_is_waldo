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

  def evaluate
    eval_params = evaluation_params
    @game = Game.find(eval_params[:id])
    c = @game.get_character(eval_params[:name])

    success = calculate_overlap_percentage(c, eval_params) > 30

    render json: { success: }
  end

  protected

  def evaluation_params
    params.permit(:context, :id, :name, :xcenter, :ycenter, :width, :height)
  end

  def calculate_overlap_percentage(user_box, eval_params)
    # Destructure arrays for User box
    (user_cx, user_cy, user_width, user_height) = [eval_params[:xcenter].to_f, eval_params[:ycenter].to_f, eval_params[:width].to_f, eval_params[:height].to_f]

    # Destructure arrays for ground truth box
    (gt_cx, gt_cy, gt_width, gt_height) = [user_box.xcenter, user_box.ycenter, user_box.width, user_box.height]

    # Calculate overlap area
    overlap_x = [0, [user_cx + user_width / 2, gt_cx + gt_width / 2].min - [user_cx - user_width / 2, gt_cx - gt_width / 2].max].max
    overlap_y = [0, [user_cy + user_height / 2, gt_cy + gt_height / 2].min - [user_cy - user_height / 2, gt_cy - gt_height / 2].max].max
    overlap_area = overlap_x * overlap_y

    # Calculate user bounding box area
    user_box_area = user_width * user_height

    # Calculate overlap percentage
    (overlap_area / user_box_area) * 100
  end
end
