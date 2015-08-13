class Security < ActiveRecord::Base
  validates :symbol, presence: true, uniqueness: true
  attr_accessor :feeds

  def self.search_or_initialize(value)
    if value.to_i > 0
      begin
        self.find(value)
      rescue
        return nil
      end
    else
      self.find_or_initialize_by(symbol: value.upcase)
    end
  end

  def symbol=(symbol_string)
    super(symbol_string.upcase)
  end

  def website=(website_string)
    super(website_string.downcase)
  end
end
