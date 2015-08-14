class Api::SecuritiesController < ApplicationController
  def create
  end

  def show
    @security = Security.search_or_initialize(params[:id])
    if @security
      render JSON: @security
      # render "securities/show.json"
    else
      render JSON: @security, status: 404
    end
  end

  private
  def security_params
    params.require(:security).permit(:symbol, :id, :name, :website)
  end
end
