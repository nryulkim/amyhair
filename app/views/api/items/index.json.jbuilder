json.items @items.each do |item|
  json.partial! './api/items/item', item: item
end
