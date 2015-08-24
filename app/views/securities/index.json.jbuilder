json.array!(@securities) do |security|
  json.(security, :id, :symbol, :name, :website, :image, :twitter_widget_id)
end
