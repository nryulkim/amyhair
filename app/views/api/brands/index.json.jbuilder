json.brands @brands.each do |brand|
  json.partial! './api/brands/brand', brand: brand
end
