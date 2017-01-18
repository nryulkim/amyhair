json.extract! item, :id, :name, :description, :product_id
json.image_url asset_path(item.img.url)
json.lengths item.lengths.each do |length|
  json.length length.length
  json.colors length.colors.each do |color|
    json.colorType color.color_type
    json.colorId color.id
    json.name color.name
  end
end
