json.products @products.each do |product|
  json.partial! './api/products/product', product: product
  json.items product.items.each do |item|
    json.partial! './api/items/item', item: item
  end
end
