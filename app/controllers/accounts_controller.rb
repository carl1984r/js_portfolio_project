class AccountsController < ApplicationController

  def create
    @account = Account.find_by(id: params[:id])
    @transaction = Transact.new

    @transaction.description = params[:description]
    @transaction.date = Time.now.strftime("%m%d%Y")
    @transaction.transact_type = params[:transact_type]
    @transaction.amount = @transaction.determine_amount(params[:transact_type], params[:amount].to_f)
    @transaction.run = ((params[:running_balance] + @transaction.amount)*100).floor/100.0

    @account.transacts << @transaction
  end

end
