class Api::SecuritiesController < ApplicationController
  def create
  end

  def show
    @security = Security.search_or_initialize(params[:id])

    render "securities/show.json"
  end

  private
  def security_params
    params.require(:security).permit(:symbol, :id, :name, :website)
  end
end
