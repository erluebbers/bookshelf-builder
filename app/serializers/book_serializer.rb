class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :description

  has_many :userbooks
  has_many :users, through: :userbooks
end
