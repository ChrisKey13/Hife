Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :meetings, only: [:new, :create] do
    resources :agendas, only: [:new, :create]
  end
end
