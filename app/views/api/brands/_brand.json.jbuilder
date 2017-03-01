json.extract! brand, :id, :brand, :description
json.image_url asset_path(brand.img.url)
json.thumb_url asset_path(brand.img.url(:thumb))
