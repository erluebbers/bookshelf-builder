class BooklistsController < ApplicationController

  def index
    booklists = Booklist.all
    render json: booklists
  end

  def create 
    booklist = Booklist.create( booklist_params.slice(:list_id, :book_id))
    if booklist.valid?
      render json: booklist, status: :created
    else
      render json: { errors: [booklist.errors.full_messages] }, status: :unprocessable_entity
    end 
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def booklist_params
    params.permit(:list_id, :book_id)
  end


end
