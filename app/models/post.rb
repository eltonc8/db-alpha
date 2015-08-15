class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :tags
  validates :user

  belongs_to :user

  def is_public?
    /public/ =~ tags
  end

  def tags=(input)
    super(input.split(/,/).map(&:strip).reject(&:empty?).join(","))
  end

  def tags
    (super).split(/,/)
  end
end
