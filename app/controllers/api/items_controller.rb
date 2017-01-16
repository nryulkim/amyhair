class Api::ItemsController < ApplicationController
  def show
    @item = Item.where(id: params[:id]).includes(lengths: [:colors])[0]
    if @item
      render :show
    else
      render json: ['Cannot find this item'], status: 422
    end
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render :create
    else
      @errors = @item.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item
      if @item.update(item_params)
        render :update
      else
        @errors = @item.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    render :destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :img)
  end
end
