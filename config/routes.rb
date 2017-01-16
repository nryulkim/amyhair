Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :brands, only: [:create, :index, :update, :destroy]
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end
