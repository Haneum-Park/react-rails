Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      namespace :users do
        resources :auth, only: %i[create] do # TODO 후에 계정찾기 & 로그인 여부 & 로그아웃 추가예정
          collection do
            get 'signedin', to: 'auth#logged_in' # 첫화면 로그인 여부
            delete 'logout', to: 'auth#logout' # 로그 아웃
          end
        end
        resources :regist, only: %i[create]
      end
    end
  end
end
