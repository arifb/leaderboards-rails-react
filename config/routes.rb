Leaderboard::Application.routes.draw do
  resources :comments
  resources :teams, only: :index
  root to: "teams#index"
end
