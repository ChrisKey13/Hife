class MeetingsController < ApplicationController
  def new
    @teams = Team.where(manager: current_user)
    @activities = Activity.all
    @users = []
    @teams.each do |team|
      team.users.each do |user|
        @users << user
      end
    end
    @company = Company.first
    @meeting = params["meeting"]
    @activities = Activity.where.not(latitude: nil, longitude: nil)
    # Select activities matching intensity
    # @markers = @activities.map do |activity|

    #   {
    #     lat: activity.latitude,
    #     lng: activity.longitude
    #   }
    # end
  end

  def create
    @meeting = Meeting.new(
      name: meeting_params["name"],
      start_time: meeting_params["date"],
      available_duration: meeting_params["available_duration"],
      description: meeting_params["meeting_description"]
    )
    @meeting.team = Team.find(meeting_params["team"])
    @meeting.activity = Activity.find(meeting_params["activity"])
    @agenda = Agenda.new(
      meeting: @meeting,
      title: meeting_params["item_title"],
      duration: meeting_params["item_duration"],
      description: meeting_params["item_description"],
      user_id: meeting_params["item_owner"]
    )
    if @meeting.save && @agenda.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  private

  def meeting_params
    params.require(:meeting).permit(:name, :date, :available_duration, :meeting_description, :team, :item_title, :item_description, :item_duration, :item_owner, :activity)
  end
end
