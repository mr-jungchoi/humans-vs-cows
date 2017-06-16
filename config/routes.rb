Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions, except: [:show, :new, :edit]
  resources :user_selections, only: [:create]
  resources :choices, only: [:create, :update, :destroy]

  get "questions/next" => "questions#next"
  get "questions/restart" => "questions#restart"
  get "questions/fetch" => "questions#fetch"
  get "facts" => "facts#index"
  get "admin" => "admin#index"

  root "home#index"
end
