
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

def default_url_options
  { host: ENV["www.hife.fr"] || "localhost:3000" }
end

end
