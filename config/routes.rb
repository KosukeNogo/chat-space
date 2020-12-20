Rails.application.routes.draw do
  # devise:Rubyのgem(ライブラリ)のひとつで、ログイン機能の実装を簡単にしてくれる。
  # usersコントローラを読み出す。
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end