class BooklistsController < ApplicationController

  def create 
    booklist = Booklist.create(booklist_params)
    if booklist.valid?
      render json: booklist, status: :created
    else
      render json: { errors: [booklist.errors] }, status: :unprocessable_entity
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
