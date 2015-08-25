class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = current_user || User.find_by_credentials(
      params[:username], params[:password]
    ) || User.new(username: params[:username])

    if @user.persisted?
      sign_in!
      render "users/show.json"
    else
      render json: ['Invalid email and password combination'], status: 422
    end
  end

  def destroy
    sign_out!
    redirect_to root_url
  end
end
