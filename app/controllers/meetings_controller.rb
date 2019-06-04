class MeetingsController < ApplicationController
  def new
    @meeting = Meeting.new
  end

  def create
    @meeting = Meeting.new(meeting_params)
    # @meeting.team = Team.find(manager: current_user)
    # @meeting.activity = Activity.find(params[:activity_id])
    if @meeting.save
      redirect_to root_path #to be changed with dashboard_path (dashboard has to be prefixed when the route will be created)
    else
      render :new
    end
  end

  private

  def meeting_params
    params.require(:meeting).permit(:name, :available_duration, :start_time, :description)
  end
end
