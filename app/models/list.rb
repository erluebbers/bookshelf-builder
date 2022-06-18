class List < ApplicationRecord
  has_many :booklists
  has_many :books, through: :booklists

  accepts_nested_attributes_for :booklists
  accepts_nested_attributes_for :books


  validates :title, presence: true, uniqueness: true
  validates :creator, presence: true
  validates :description, presence: true
  validates :genre, presence: true
end
