Rails.application.routes.draw do
  resources :account_transactions
  resources :client_accounts
  resources :clients
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
