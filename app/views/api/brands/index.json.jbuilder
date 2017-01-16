json.brands @brands.each do |brand|
  json.partial! './api/brands/brand', brand: brand
  json.products brand.products.each do |product|
    json.partial! './api/products/product', product: product
  end
end
