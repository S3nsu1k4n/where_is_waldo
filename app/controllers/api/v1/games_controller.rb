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
    p '###########################'
    p eval_params
    @game = Game.find(eval_params[:id])
    p @game
    #p @game.characters.where(name: eval_params[:name])
    c = @game.get_character(eval_params[:name])
    
    user_xcenter = eval_params[:xcenter].to_f
    user_width = eval_params[:width].to_f
    user_ycenter = eval_params[:ycenter].to_f
    user_height = eval_params[:height].to_f

    
    intersection_width = [c.xcenter + c.width, user_xcenter + user_width].min - [c.xcenter, user_xcenter].max
    intersection_height = [c.ycenter + c.height, user_ycenter + user_height].min - [c.ycenter, user_ycenter].max
    intersection_area = (intersection_width > 0 && intersection_height > 0) ? intersection_width * intersection_height : 0

    union_area = c.width * c.height + user_width * user_height - intersection_area
    

    p [c.xcenter + c.width, user_xcenter + user_width]
    p user_width
    p intersection_width

    iou = intersection_area / union_area
    overlap_ratio = intersection_area / (user_width * user_height)
    coverage_ratio = intersection_area / (c.width * c.height)
    p '####################'
    p iou
    p overlap_ratio
    p coverage_ratio
    p '####################'

    render json: { iou: }
  end

  def evaluation_params
    params.permit(:context, :id, :name, :xcenter, :ycenter, :width, :height)
  end
end
