json.(@security_list, :id, :symbol, :name)

if @security_list.securities
  json.securities do
    json.array! @security_list.securities do |security|
      json.(security, :id, :symbol, :name, :image)
    end
  end
end
