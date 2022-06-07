class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :location, :password_digest

  has_many :userbooks
  has_many :books, through: :userbooks
end
