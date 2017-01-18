class Api::ColorsController < ApplicationController
  def index
    @colors = Color.all;
    render :index
  end

  def create
    @color = Color.new(color_params)
    if @color.save
      render :create
    else
      @errors = @color.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    @color = Color.find(params[:id])
    if @color
      if @color.update(color_params)
        render :update
      else
        @errors = @color.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  def destroy
    @color = Color.find(params[:id])
    @color.destroy
    @color.image.clear if @color.image

    render :destroy
  end

  private
  def color_params
    params.require(:color).permit(:color_type, :name, :img)
  end
end
