class Api::FeaturedsController < ApplicationController
  def index
    @featureds = Featured.all.includes(:brand)
    render :index
  end

  def create
    if Featured.count == 3
      render json: ['Cannot have more than 3 featured'], status: 422
    else
      brand = Brand.find(featured_params[:brand_id])
      name = featured_params[:name] || brand[:name]
      desc = featured_params[:description] || brand[:description]
      img = featured_params[:img] || brand[:img]
      @featured = Featured.new({ name: name, description: desc, img: img, brand_id: featured_params[:brand_id] })
      if @featured.save
        render :create
      else
        @errors = @featured.errors.full_messages
        render json: @errors, status: 422
      end
    end
  end

  def update
    @featured = Featured.where(id: params[:id]).includes(:brand)[0]
    if @featured
      if @featured.update(featured_params)
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
    render :destroy
  end

  private
  def featured_params
    params.require(:featured).permit(:name, :description, :img, :brand_id)
  end
end
