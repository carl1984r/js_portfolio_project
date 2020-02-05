class ClientAccountsController < ApplicationController
  def show
    client_account = ClientAccount.where(client_id: params[:id])
    options = {
    include: [:account]  }
    render json: ClientAccountSerializer.new(client_account, options)
  end
end
