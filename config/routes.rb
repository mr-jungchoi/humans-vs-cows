Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions, only: [:index]
  resources :user_selections, only: [:create]
  resources :survey_round, only: [:show]

  get "questions/next" => "questions#next"
  get "facts" => "facts#index"
  get "questions/restart" => "questions#restart"

  root "home#index"
end
