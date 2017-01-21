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
    old_img = nil
    if @color.img_file_name
      old_img = @color.img
    end
    if @color
      if @color.update(color_params)
        old_img.clear if old_img
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
    @color.img.clear if @color.img

    render :destroy
  end

  private
  def color_params
    params.require(:color).permit(:color_type, :name, :img)
  end
end
