class AccountTransactsController < ApplicationController
  def show
    account_transactions = AccountTransact.where(account_id: params[:id])
    options = {
    include: [:account, :transact] }
    render json: AccountTransactSerializer.new(account_transactions, options)
  end
end
