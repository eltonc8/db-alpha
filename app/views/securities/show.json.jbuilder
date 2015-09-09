json.(@security, :id, :symbol, :name, :website, :image, :twitter_widget_id, :status)

if @security.feeds
  json.feeds @security.feeds.entries, :title, :url, :published, :entry_id, :summary
end
