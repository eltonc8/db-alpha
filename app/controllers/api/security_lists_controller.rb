module Api
  class SecurityListsController < ApplicationController
    def index
      @security_list = SecurityList.includes(:securities).find(1)
      render json: @security_list
    end

    def show
      @security_list = SecurityList.includes(:securities).find(params[:id])
      render json: @security_list
    end
  end
end
