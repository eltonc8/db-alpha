class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :user, presence: true

  belongs_to :user

  def self.search(options)
    query = "(user_id = :id OR shared_with ~* 'public')"
    query += " AND tags ~* :s_id" if options[:security_id]
    Post.order(:created_at).where(query, id: options[:id], s_id: "\\y" + options[:security_id] + "\\y")
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
    super ? super.split(/,/) : []
  end
end
