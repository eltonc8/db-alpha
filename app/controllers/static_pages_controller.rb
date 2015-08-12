class StaticPagesController < ApplicationController
  def root
    if signed_in?
      render :index
    else
      render :landing_page
    end
  end
end
