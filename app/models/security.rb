class Security < ActiveRecord::Base
  validates :symbol, presence: true, uniqueness: true
  attr_accessor :feeds

  def self.search_or_initialize(value)
    begin
      result = value.to_i > 0 ?
               self.find(value) :
               self.find_or_initialize_by(symbol: value.upcase)
    rescue
      result = nil
    end

    if result
      #Cannot be refactored into instance method, as Feedjira cannot be used in an instance method yet.
      result.feeds = Feedjira::Feed.fetch_and_parse("http://feeds.finance.yahoo.com/rss/2.0/headline?region=US&s=#{result.symbol.html_safe}")

      /for (?<name>.*)\Z/ =~ result.feeds.description #grabs the name out of the feed
      name.slice!(/ (common|comm|new com)\b.*\Z/i)

      if name
        result.name ||= name.dup
        google_web = Google::Search::Web.new(query: name + " investor")
        result.website ||= google_web.first.visible_uri
        name.slice!(/ (inc|corp)\.+.*\Z/i)
        google_image = Google::Search::Image.new(query: name + " logo")
        result.image ||= google_image.first.uri
      end
    end

    result
  end

  def symbol=(symbol_string)
    super(symbol_string.upcase)
  end

  def website=(website_string)
    super(website_string.downcase)
  end
end
