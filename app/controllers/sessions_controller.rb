class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email], params[:user][:password]
    ) || User.new(user_params)

    if @user.persisted?
      sign_in!
      redirect_to root_url
    else
      flash.now[:user_notices] = ['Invalid email and password combination']
      render :new, status: 422
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
