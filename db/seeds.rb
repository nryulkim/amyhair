# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
COLORS = {
  "solid":[
    '1', '144', '1b', '2', '260', '27', '280', '30', '33', '34', '350',
    '4', '44', '51', '613', '99j', 'blue', 'bug', 'natural-black', 'pink', 'purple',
    'red'
  ],
  "frost mix":[
    "18F22", "1BF-27", "1BF-30", "1BF-33", "1BF-99J", "1BF-BUG", "1BF135",
    "1BF350", "27F33", "27F613", "2F30", "2F35", "30F144", "33F27",
    "4F-27", "4F-30", "4TF144", "F14-24", "F18-22", "F1B-27", "F1B-30",
    "F1B-33", "F1B-350", "F1B-BUG", "F22-24", "F22-27", "F27-30", "F27-613",
    "F4-27", "F4-27-30", "F4-30", "FT4-33", "P10-16", "P18-22", "P1B-144",
    "P1B-27", "P1B-30", "P1B-33", "P1B-350", "P1B-99J", "P1B-BUG", "P27-30",
    "P27-613", "P30-144", "P30-33", "P4-613", "P4-27", "P4-30", "P6-22",
    "P6-27"
  ],
  "two tone":[
    "1BT-130", "1BT-135", "1BT-144", "1BT-27", "1BT-30", "1BT-33", "1BT-350",
    "1BT-99J", "1BT-BUG", "1BT-COG", "1BT-RED", "1BTBLUE", "1BTPUR", "1BTRED",
    "1BTT27", "1BTT30", "1BTT33", "1BTT350", "1BTTBUG", "27T-613", "27T33",
    "2T130", "2T35", "30T144", "33T27", "3T1002F", "3T340", "4TT30", "OT1B-27",
    "OT1B-EMERALD", "OT1B-PURPLE", "OT1B-RED", "OT1B-SILVER", "OT1B-TURQUOISE",
    "OT1B30", "OT2-27", "SILVER-GREY", "T-350", "T-PURPLE", "T-SILVER", "T-TURQUOISE",
    "T1B-27", "T1B-30", "T1B-350", "T1B-613", "T1B-BLUE", "T1B-BUG",
    "T1B-GREEN", "T1B-PINK", "T1B-PURPLE", "T1B-RED", "T1B-RED", "T1B-SILVER",
    "T1B-530", "T1B-530", "T4-30", "T6-PINK", "TT4-119", "TT4-130-24",
    "TT4-30-24", "TT4-30-27", "TT4-35-24", "TT4-8-24"
  ],
  "special f mix":[
    "1010", "22M24", "4007", "6010", "AL327", "AL336", "AL399", "F2227",
    "F8-22", "FM624", "FM625", "M1B-27", "M1B-30", "M1B-33", "M1B-350",
    "M1B144", "M1BBUR", "M30-144", "M4-27", "M4-30", "MT-BLUE", "MT-PINK",
    "MT-S-144", "MT-S-GREEN", "MT-SILVER", "PT-BLUE", "PT-PURPLE", "PT-RED",
    "PT-S-GREEN", "PT-SILVER", "R-27", "R-PUR", "R-RED", "R829", "RED", "RED-BLACK"
  ],
  "three tone":[
    "1B-99J-BUG", "1B-BUG-RED", "2-27F-30R", "4A-30R-27F", "AL327", "AL399",
    "F4-27-613", "FT4-27", "FT4-30", "FT4-30-27", "FT4-33-30", "FT4-BUG-350",
    "FT4-W8-240", "P2-30-33", "P4-27-613", "P4-30-27", "TF1B-30", "TF1B-33",
    "TF1B-PINK", "TF1B-PUR", "TF1B-RED", "TF4-27"
  ],
  "freya silky":[
    "10", "22", "6", "8", "D10-16", "D10-18", "D14-22", "D14-24", "D16-22", "D18-22"
  ]
}

Color.destroy_all

def seed_image(file_name)
  path = File.join(Rails.root, "/public/colors/#{file_name}.jpg")
  if(File.exists?(path))
    File.open(path)
  else
    nil
  end
end


COLORS.each do |key, arr|
  arr.each do |color_name|
    atts = { color_type: key, name: color_name }
    color = Color.find_or_create_by(atts)
    color.img = seed_image(color_name)
    color.save
  end
end
