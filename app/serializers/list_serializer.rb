class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :genre, :creator

  has_many :booklists
  has_many :books, through: :booklists
end
