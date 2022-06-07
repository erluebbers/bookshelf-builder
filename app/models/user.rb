class User < ApplicationRecord
  has_secure_password
  
  has_many :userbooks
  has_many :books, through: :userbooks

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true
  validates :location, presence: true


end
