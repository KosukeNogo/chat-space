Rails.application.routes.draw do
  # devise:Rubyのgem(ライブラリ)のひとつで、ログイン機能の実装を簡単にしてくれる。
  # usersコントローラを読み出す。
  devise_for :users
  root 'groups#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end