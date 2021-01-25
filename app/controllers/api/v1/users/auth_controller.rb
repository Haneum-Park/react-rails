module Api
  module V1
    module Users
      class AuthController < ApiController
        def create
          user = User.find_by(username: params[:user][:email])

          if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: { status: :success, email: user.username, logged_in: true }, status: 204
          else
            render json: { status: :error, logged_in: false }, status: 400
          end
        end

        def logout
          reset_session

          render json: { logged_in: false }, status: 200
        end

        def logged_in
          if current_user
            render json: { email: current_user&.username, logged_in: true }, status: 200
          else
            render json: { logged_in: false }, status: 200
          end
        end
      end
    end
  end
end
