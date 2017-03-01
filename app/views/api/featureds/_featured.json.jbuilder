json.extract! featured, :id, :name, :description, :brand_id
json.image_url asset_path(featured.img.url)
json.large_url asset_path(featured.img.url(:large))
