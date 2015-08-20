SampleReactRailsApp::Application.routes.draw do
  resources :comments
  resources :teams, only: :index
  root :to => redirect("/teams")
end
