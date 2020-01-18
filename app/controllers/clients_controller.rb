class ClientsController < ApplicationController

  def index
    clients = Client.all
    render json: clients
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    render json: recipe
  end

end
