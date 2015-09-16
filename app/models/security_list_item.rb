class SecurityListItem < ActiveRecord::Base
  belongs_to :security_list
  belongs_to :security

  validates :security, :security_list, presence: true
  validates :security_id, uniqueness: { scope: :security_list_id }
end
