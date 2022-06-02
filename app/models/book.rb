class Book < ApplicationRecord
  has_many :userbooks
  has_many :users, through: :userbooks

  validates :title, presence: true, uniqueness: true


end
