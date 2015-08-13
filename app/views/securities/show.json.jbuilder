json.(@security, :id, :symbol, :name, :website)

json.feeds @security.feedy.entries, :title, :url, :published, :entry_id, :summary
json.feeds @security.feedg.entries
