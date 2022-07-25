class ListsController < ApplicationController

  def index
    lists = List.all
    render json: lists
  end

  def show
    list = List.find(params[:id])
    render json: list
  end 

  def update
    list = List.find(params[:id])
    if list
      list.update(list_params)
      render json: list, status: :accepted
    else
      render json: { error: "List not Found" }, status: :not_found
    end
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

  def list_params
    params.permit(:title, :creator, :description, :genre)
  end


end
