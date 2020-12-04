class Message < ApplicationRecord
  belengs_to :group
  belengs_to :user

  validates :content, presence: true, unless: :image?

  mount_uploader :image, ImageUploader
end
