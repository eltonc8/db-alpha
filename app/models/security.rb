class Security < ActiveRecord::Base
  validates :symbol, presence: true, uniqueness: true
  attr_accessor :feeds, :status

  has_many :security_list_items, dependent: :destroy
  has_many :security_lists, through: :security_list_items

  def self.search_or_initialize(value)
    begin
      if value.to_i > 0
        result = self.find(value)
      else
        result = self.find_or_initialize_by(symbol: value.upcase)
      end
      result.update_data
    rescue
      return nil
    end

    result
  end

  def update_data
    self.feeds = Feedjira::Feed.fetch_and_parse("http://feeds.finance.yahoo.com/rss/2.0/headline?region=US&s=#{symbol.html_safe}")

    if /not found/ =~ feeds.description
      self.feeds = nil
      self.status = 404
      return
    end

    /for (?<qname>.*)\Z/ =~ feeds.description #grabs the name out of the feed
    qname.slice!(/ (c|com|comm|commo|common|new com)\b.*\Z/i)
    self.name = qname

    if ( updated_at && updated_at > 1.day.ago) || !image || !website
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
