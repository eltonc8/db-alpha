class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!
      redirect_to root_url
    else
      flash.now[:notices] = @user.errors.full_messages
      render :new, status: 422
    end
  end
end
