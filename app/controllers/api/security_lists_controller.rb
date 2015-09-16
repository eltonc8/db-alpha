module Api
  class SecurityListsController < ApplicationController
    def index
      @security_lists = SecurityList.where(id: [1,2,3]).order(:id)
      render json: @security_lists
    end

    def show
      @security_list = SecurityList.includes(:securities).order("securities.symbol").find(params[:id])
      render "security_lists/show.json"
    end
  end
end
