class BooklistSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :list_id

  belongs_to :book
  belongs_to :list
end
