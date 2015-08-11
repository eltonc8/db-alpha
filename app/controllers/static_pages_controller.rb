class StaticPagesController < ApplicationController
  def root
    if signed_in?
      render :landing_page
    else
      render :index
    end
  end
end
