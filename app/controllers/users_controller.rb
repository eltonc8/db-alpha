class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.password = @user.password_digest = nil

    if @user.save
      sign_in!
      redirect_to root_url
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end
