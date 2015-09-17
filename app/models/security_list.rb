class SecurityList < ActiveRecord::Base
  has_many :security_list_items, dependent: :destroy, inverse_of: :security_list
  has_many :securities, through: :security_list_items

  validates :name, presence: true

  def self.show(value)
    if value.is_a?(Fixnum) || /\A[[:digit:]]+\Z/ =~ value
      SecurityList.includes(:securities).order("securities.symbol").find(value)
    elsif /\A[[:alpha:]]{1,5}\Z/ =~ value.to_s
      SecurityList.includes(:securities).order("securities.symbol").find_by_symbol(value.upcase)
    end
  end

  def securities=(list)
    list.map! do |security|
      if security.is_a?(Fixnum) || /\A[[:digit:]]+\Z/ =~ security
        Security.find(security)
      elsif /\A[[:alpha:]]{1,5}\Z/ =~ security.to_s
        record = Security.find_or_initialize_by(symbol: security.upcase)
        unless record.id
          record.update_data #saves this into database if it is valid
          sleep(0.25 * rand) #avoids insufficient resources limits from using yahoo API
        end

        record
      end
    end.compact!

    super(list)
  end

  def symbol=(symbol)
    super(symbol.upcase)
  end

  def list
    securities.order(:symbol).pluck(:symbol)
  end
end
