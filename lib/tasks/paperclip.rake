namespace :paperclip do
  desc "Updates styles for models"
  task update_styles: :environment do
    Color.all.each { |obj| obj.img.reprocess! }
    Item.all.each { |obj| obj.img.reprocess! }
    Featured.all.each { |obj| obj.img.reprocess! }
    Product.all.each { |obj| obj.img.reprocess! }
    Brand.all.each { |obj| obj.img.reprocess! }
  end

end
