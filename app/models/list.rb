class List < ApplicationRecord
  has_many :booklists
  has_many :books, through: :booklists

  validates :title, presence: true, uniqueness: true
  validates :creator, presence: true
  validates :description, presence: true
  validates :genre, presence: true
end
