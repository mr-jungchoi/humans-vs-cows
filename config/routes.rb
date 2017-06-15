Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions, except: [:show, :new, :edit]
  resources :user_selections, only: [:create]

  get "questions/next" => "questions#next"
  get "facts" => "facts#index"
  get "questions/restart" => "questions#restart"
  get "admin" => "admin#index"

  root "home#index"
end
