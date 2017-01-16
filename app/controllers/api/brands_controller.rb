class Api::BrandsController < ApplicationController
  def create
    @brand = Brand.new(comment_params)
    if @brand.save
      render :create
    else
      @errors = @brand.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    @brand = Brand.find(params[:id])
    if @brand
      if @brand.update(brand_params)
        render :update
      else
        @errors = @brand.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  def destroy
    @brand = Brand.find(params[:id])
    @brand.destroy
    render :destroy
  end

  private
  def brand_params
    params.require(:brand).permit(:name, :description, :image)
  end
end