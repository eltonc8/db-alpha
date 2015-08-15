class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :user, presence: true

  belongs_to :user

  def self.search(options)
    if options[:security_id]
      Post.order(:created_at)
          .where("user_id = ? OR shared_with LIKE '\\mpublic\\M' AND tags LIKE ?", options[:id], options[:security_id].upcase)
    else
      Post.order(:created_at)
          .where("user_id = ? OR shared_with LIKE '\\mpublic\\M'", options[:id])
    end
  end

  def is_public?
    /public/ =~ shared_with
  end

  def shared_with=(input)
    input = input.join(",") if input.is_a? Array
    super(input.downcase.split(/,/).map(&:strip).reject(&:empty?).uniq.join(","))
  end

  def shared_with
    super ? super.split(/,/) : []
  end

  def tags=(input)
    input = input.join(",") if input.is_a? Array
    super(input.upcase.split(/,/).map(&:strip).reject(&:empty?).uniq.join(","))
  end

  def tags
    super ? super.downcase.split(/,/) : []
  end
end
