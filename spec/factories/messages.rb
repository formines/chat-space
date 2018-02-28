FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/cat.jpg")
    # image Faker::Lorem.sentence
    # user
    # group
  end

  trait :with do
  	user
  	group
  end
end