class ClientAccountsController < ApplicationController
  def show
    client_accounts = ClientAccount.where(client_id: params[:id])
    options = {
    include: [:account] }
    render json: ClientAccountSerializer.new(client_accounts, options)
  end
end
