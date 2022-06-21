class Book < ApplicationRecord
  has_many :userbooks
  has_many :users, through: :userbooks

  has_many :booklists
  has_many :books, through: :booklists

  validates :title, presence: true
  validates :author, presence: true
  validates :genre, presence: true
  validates :description, presence: true


end
