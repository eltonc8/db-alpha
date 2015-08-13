json.(@security, :id, :symbol, :name, :website)

json.feeds @security.feeds.entries, :title, :url, :published, :entry_id, :summary
