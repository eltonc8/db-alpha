class SecurityList < ActiveRecord::Base
  has_many :security_list_items, dependent: :destroy, inverse_of: :security_list
  has_many :securities, through: :security_list_items

  validates :name, presence: true

  def securities=(list)
    list.map! do |security|
      if /\A[[:digit:]]+\Z/ =~ security.to_s
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

  def list
    securities.order(:symbol).pluck(:symbol)
  end
end
