json.featureds @featureds.each do |featured|
  json.partial! './api/featureds/featured', featured: featured
end
