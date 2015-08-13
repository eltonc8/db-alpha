class Api::SecuritiesController < ApplicationController
  def create
  end

  def show
    if params[:id].length > 6
      @security = Security.new
      render "securities/show.json", status: 404
    else
      @security = Security.search_or_initialize(params[:id])
      @security.feeds = Feedjira::Feed.fetch_and_parse "http://feeds.finance.yahoo.com/rss/2.0/headline?region=US&s=#{@security.symbol.html_safe}"

      render "securities/show.json"
      # render json: @security
    end
  end

  private
  def security_params
    params.require(:security).permit(:symbol, :id, :name, :website)
  end
end
