class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      sign_in!
      redirect_to root_url
    else
      @user.password = @user.password_digest = nil
      render json: @user.errors.full_messages, status: 422
    end
  end
end
