class User < ApplicationRecord
  has_secure_password
  
  has_many :userbooks
  has_many :books, through: :userbooks

  validates :username, presence: true, uniqueness: true


end
