json.(@security, :id, :symbol, :name, :website, :image)

json.feeds @security.feeds.entries, :title, :url, :published, :entry_id, :summary
