class BooksController < ApplicationController
  before_action :authorize


  def index
    books = Book.all
    render json: books
  end

  def create
    user = User.find_by(id: session[:user_id])
    book = user.books.create(book_params)
    if book.valid?
      render json: book, status: :created
    else
      render json: { errors: [book.errors] }, status: :unprocessable_entity
    end 
  end

  def destroy
    book = Book.find(params[:id])
    if book
      book.destroy
      head :no_content
    else
      render json: {error: "book not found"}, status: :not_found
    end
  end 

  def update
    book = Book.find(params[:id])
    if book
      book.update(book_params)
      render json: book, status: :accepted
    else
      render json: { error: "book not Found" }, status: :not_found
    end
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def book_params
    params.permit(:title, :author, :description, :genre)
  end


end
