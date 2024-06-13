Rails.application.routes.draw do
      # get 'myapp1/new'
       #get 'myapp1/create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "/", to: "application#home"
  get "/u" => "myapp1#form", as: :rails_health_check
	#root 'application#home'
	#resources :myapp1, only: [:new, :create]
  # Defines the root path route ("/")
  # root "posts#index"
end
