class AccountsController < ApplicationController

  def create
    @account = Account.find_by(id: params[:id])
    @transaction = Transact.new

    @transaction.description = params[:description]
    @transaction.amount = params[:amount].to_f
    @transaction.date = Time.now.strftime("%m%d%Y")
    @transaction.transact_type = params[:transact_type]
    @transaction.run = params[:running_balance]

    @account.transacts << @transaction
  end

end
