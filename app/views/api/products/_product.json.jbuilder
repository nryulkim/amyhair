json.extract! product, :id, :name, :description, :brand_id
json.image_url asset_path(product.img.url)
json.thumb_url asset_path(product.img.url(:thumb))
