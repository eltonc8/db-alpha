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

    result.update_data if result

    result
  end

  def update_data
    self.feeds = Feedjira::Feed.fetch_and_parse("http://feeds.finance.yahoo.com/rss/2.0/headline?region=US&s=#{symbol.html_safe}")

    /for (?<qname>.*)\Z/ =~ feeds.description #grabs the name out of the feed
    qname.slice!(/ (common|comm|new com)\b.*\Z/i)
    self.name = qname

    if name && ( updated_at && updated_at > 1.day.ago) || !image || !website
      qname = name.dup
      google_web = Google::Search::Web.new(query: qname + " investor")
      self.website ||= google_web.first.visible_uri
      qname.slice!(/ (inc|corp)\.+.*\Z/i)
      google_image = Google::Search::Image.new(query: qname + " logo")
      self.image ||= google_image.first.uri

      self.save
    end
  end

  def symbol=(symbol_string)
    super(symbol_string.upcase)
  end

  def website=(website_string)
    super(website_string.downcase)
  end
end
