class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :user, presence: true

  belongs_to :user

  def self.search(options)
    if options[:security_id]
      query = "(user_id = ? OR shared_with ~* 'public') AND tags ~* ?"
      options[:security_id] = options[:security_id].upcase
      Post.order("created_at DESC").where(query, options[:user].id, "\\y#{ options[:security_id] }\\y")
    else
      options[:user].posts.order("created_at DESC")
    end
  end

  def is_public?
    /public/ =~ shared_with
  end

  def tags=(input)
    input = input.join(",") if input.is_a? Array
    super(input.upcase.split(/,/).map(&:strip).reject(&:empty?).uniq.join(","))
  end

  def tags
    super ? super.split(/,/) : []
  end
end
