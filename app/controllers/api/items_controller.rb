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
    @item = Item.where(id: params[:id]).includes(lengths: [:colors])[0]
    lengths = JSON.parse(length_params['lengths'])
    if @item
      if @item.update(item_params)
        create_or_update_lengths(@item, lengths)
        @item = Item.where(id: params[:id]).includes(lengths: [:colors])[0]
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
    @item.image.clear if @item.image

    render :destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :img, :product_id)
  end

  def length_params
    params.require(:item).permit(:lengths)
  end

  def create_or_update_lengths(item, lengths)
    length_status = {}
    lengths.each do |obj|
      len = obj['length']
      length_status[len] = {}
      length_status[len]['status'] = 1
      length_status[len]['colors'] = obj['colors']
    end
    item.lengths.each do |length|
      obj = length_status[length.length]
      if obj
        length_status[length.length]['status'] = 0
      else
        length_status[length.length] = {}
        length_status[length.length]['status'] = -1
      end
    end

    length_status.each do |length, obj|
      status = obj['status']
      if status == 1
        colors = obj['colors'].split(",").map() { |val| val.strip() }
        length_obj = Length.create(item_id: item.id, length: length)
        create_or_update_colors(length_obj, colors)
      elsif status == 0
        colors = obj['colors'].split(",").map() { |val| val.strip() }
        length_obj = Length.where(item_id: item.id, length: length)[0]
        create_or_update_colors(length_obj, colors)
      else
        Length.where(item_id: item.id, length: length)[0].destroy
      end
    end
  end

  def create_or_update_colors(length, colors)
    color_status = {}
    colors.each do |color|
      color_status[color] = 1
    end
    length.colors.each do |color|
      status = color_status[color.name]
      if status == 1
        color_status[color.name] = 0
      else
        color_status[color.name] = -1
      end
    end

    color_status.each do |color, status|
      found_color = Color.find_by(name: color)
      if status == 1
        ItemColor.create({ length_id: length.id, color_id: found_color.id })
      elsif status == -1
        ItemColor.where({ length_id: length.id, color_id: found_color.id })[0].destroy
      end
    end
  end
end
