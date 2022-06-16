class ListsController < ApplicationController
  before_action :authorize

  def index
    lists = List.all
    render json: lists, include: :books
  end

  def create 
    list = List.create(list_params)
    if list.valid?
      render json: list, status: :created
    else
      render json: { errors: [list.errors] }, status: :unprocessable_entity
    end 
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def list_params
    params.permit(:title, :creator, :description, :genre)
  end


end
