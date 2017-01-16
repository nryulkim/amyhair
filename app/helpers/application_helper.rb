module ApplicationHelper
  def getColors
    color_path = "#{Rails.root}/app/assets/images/haircolors/"
    colors = Dir.entries(color_path).select{|file| file[/.*\.jpg/]}
    paths = {}
    colors.each do |color|
      paths[color] = image_url('haircolors/' + color)
    end
    JSON.generate(paths);
  end
end
