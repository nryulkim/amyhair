class Api::FeaturedsController < ApplicationController
  def index
    @featureds = Featured.all
    render :index
  end

  def create
    if Featured.count == 3
      render json: ['Cannot have more than 3 featured'], status: 422
    end

    @featured = Featured.new(featured_params)
    if @featured.save
      render :create
    else
      @errors = @featured.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    @featured = Featured.find(params[:id])
    old_img = nil
    if @featured.img_file_name
      old_img = @featured.img
    end
    if @featured
      if @featured.update(featured_params)
        old_img.clear if old_img
        render :update
      else
        @errors = @featured.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  def destroy
    @featured = Featured.find(params[:id])
    @featured.destroy
    @featured.image.clear if @featured.image
    render :destroy
  end

  private
  def featured_params
    params.require(:featured).permit(:name, :description, :img)
  end
end
