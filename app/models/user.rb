class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true

  after_initialize :ensure_session_token
  before_validation :ensure_downcase
  before_save :ensure_downcase
  before_update :ensure_downcase
  before_create :ensure_downcase
  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by_email(email)
    @user if @user && @user.is_password?(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def reset_session_token!
    update!(session_token: User.generate_session_token)
    session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
    session_token
  end

  private
  def ensure_downcase
    @email && @email.downcase!
  end
end
