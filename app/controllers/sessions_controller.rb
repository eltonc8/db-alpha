class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:username], params[:password]
    ) || User.new(username: params[:username])
    @user.password = @user.password_digest = nil

    if @user.persisted?
      sign_in!
      redirect_to root_url
    else
      render json: ['Invalid email and password combination'], status: 422
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
