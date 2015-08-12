class Security < ActiveRecord::Base
  validates :symbol, presence: true, uniqueness: true
  before_validation :ensure_case_convention
  before_save :ensure_case_convention
  before_update :ensure_case_convention
  before_create :ensure_case_convention

  def self.search_or_initialize(value)
    if value.to_i > 0
      begin
        self.find(value)
      rescue
        nil
      end
    else
      self.find_or_initialize_by(symbol: value)
    end
  end

  private
  def ensure_case_convention
    @symbol && @symbol.upcase!
    @website && @website.downcase!
  end

end
