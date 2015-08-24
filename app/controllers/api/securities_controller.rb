module Api
  class SecuritiesController < ApiController
    def index
      @securities = list_params ?
                    Security.order(:symbol).where(symbol: list_params) :
                    Security.order(:symbol).all
      render "securities/index.json"
    end

    def show
      @security = Security.search_or_initialize(params[:id])
      if @security
        render "securities/show.json"
      else
        render JSON: @security, status: 404
      end
    end

    private
    def list_params
      params[:symbols] && params[:symbols].upcase.split(",")
    end

    def security_params
      params.require(:security).permit(:symbol, :id, :name, :website)
    end
  end
end
