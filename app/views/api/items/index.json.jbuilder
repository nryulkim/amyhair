json.items @items.each do |item|
  json.partial! './api/items/item', item: item
  json.lengths item.lengths.each do |length|
    json.length length.length
    json.colors length.colors.each do |color|
      json.partial! './api/colors/color', color: color
    end
  end
end
