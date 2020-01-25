class ClientsController < ApplicationController

  def index
    clients = Client.all
    render json: ClientSerializer.new(clients)
  end

end
