solid_colors = @colors.where(color_type: "solid")
frost_colors = @colors.where(color_type: "frost mix")
two_colors = @colors.where(color_type: "two tone")
specialf_colors = @colors.where(color_type: "special f mix")
three_colors = @colors.where(color_type: "three tone")
silky_colors = @colors.where(color_type: "freya silky")

json.colors do
  json.solid solid_colors.each do |color|
    json.partial! './api/colors/color', color: color
  end
  json.frost frost_colors.each do |color|
    json.partial! './api/colors/color', color: color
  end
  json.two two_colors.each do |color|
    json.partial! './api/colors/color', color: color
  end
  json.specialf specialf_colors.each do |color|
    json.partial! './api/colors/color', color: color
  end
  json.three three_colors.each do |color|
    json.partial! './api/colors/color', color: color
  end
  json.silky silky_colors.each do |color|
    json.partial! './api/colors/color', color: color
  end
end
