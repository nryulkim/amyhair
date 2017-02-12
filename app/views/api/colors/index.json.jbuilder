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
  json.set! 'frost mix' do
    json.array! frost_colors.each do |color|
      json.partial! './api/colors/color', color: color
    end
  end
  json.set! 'two tone' do
    json.array! two_colors.each do |color|
      json.partial! './api/colors/color', color: color
    end
  end
  json.set! 'special f mix' do
    json.array! specialf_colors.each do |color|
      json.partial! './api/colors/color', color: color
    end
  end
  json.set! 'three tone' do
    json.array! three_colors.each do |color|
      json.partial! './api/colors/color', color: color
    end
  end
  json.set! 'freya silky' do
    json.array! silky_colors.each do |color|
      json.partial! './api/colors/color', color: color
    end
  end
end
