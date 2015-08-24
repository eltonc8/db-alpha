Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, default: { format: :json } do
    resources :securities, only: [:index, :show, :create] do
      resources :posts, only: [:index]
    end
    resources :posts, only: [:index, :create, :show, :update, :destroy]
  end
end
