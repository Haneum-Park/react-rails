module Api
  module V1
    module Users
      class RegistController < ApiController
        def create
          user = User.new(
            name: params[:user][:name],
            username: params[:user][:email],
            password: params[:user][:password],
            password_confirmation: params[:user][:password]
          )
          if user.save
            render json: { status: :success, logged_in: true }, status: 204
          else
            render json: { status: :error, logged_in: false }, status: 422
          end
        end
      end
    end
  end
end
