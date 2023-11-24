Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'leaderboard/index'
      post 'leaderboard/create'
      get 'games/index'
      get 'games/show/:id', to: 'games#show'
      get 'characters/index/:game_id', to: 'characters#index'
      get 'characters/show/:name', to: 'characters#show'
      get 'games/evaluate/:id', to: 'games#evaluate'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'homepage#index'
end
