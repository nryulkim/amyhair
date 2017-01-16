class Api::ItemsController < ApplicationController
  def index
    @items = Item.all.includes(lengths: [:colors])
    render :index
  end

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
      lengths = JSON.parse(length_params['lengths'])
      lengths.each do |length|
        attrs = { item_id: @item.id, length: length.length }
        new_length = Length.new(attrs)

        if new_length.save
          colors = length['colors'].split(",").map() { |val| val.strip() }
          colors.each do |color|
            found_color = Color.find_by(name: color)
            if found_color
              ItemColor.create!({ length_id: new_length.id, color_id: found_color.id })
            end
          end
        else
          @errors = @length.errors.full_messages
          render json: @errors, status: 422
        end
      end
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
    params.require(:item).permit(:name, :description, :img, :product_id)
  end

  def length_params
    params.require(:item).permit(:lengths)
  end

end
