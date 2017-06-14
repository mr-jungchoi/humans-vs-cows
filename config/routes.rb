Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions
  resources :user_selections, only: [:create]
  resources :survey_round, only: [:show]

  root "home#index"
end
