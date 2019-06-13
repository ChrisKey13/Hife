class DashboardController < ApplicationController
  def home
    @all_meetings = Meeting.all
  end

  def analytics
  end
end
