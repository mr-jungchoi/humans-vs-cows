Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions
  resources :choices_questions, only: [:create, :update, :destroy]
  resources :answers, only: [:create]

  root "home#index"
end
