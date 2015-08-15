class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :user, presence: true

  belongs_to :user

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
