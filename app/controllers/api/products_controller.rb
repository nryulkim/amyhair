class Api::ProductsController < ApplicationController
  def index
    @products = Product.all.includes(:items)
    render :index
  end

  def show
    @product = Product.where(id: params[:id]).includes(:items)[0]
    if @product
      render :show
    else
      render json: ['Cannot find this product'], status: 422
    end
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :create
    else
      @errors = @product.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product
      if @product.update(product_params)
        render :update
      else
        @errors = @product.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :destroy
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :img, :brand_id)
  end
end
