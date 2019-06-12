class MeetingsController < ApplicationController
  def new
    @teams = Team.where(manager: current_user)
    @users = []
    @teams.each do |team|
      team.users.each do |user|
        @users << user
      end
    end
    @company = Company.first
    @agenda = Agenda.new

    @meeting = params["meeting"]

    @activities = Activity.activities_seeded
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
      title: agenda_params["title"],
      duration: agenda_params["duration"],
      description: agenda_params["description"],
      user_id: agenda_params["user"]
    )
    if @meeting.save && @agenda.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  private

  def meeting_params
    params.require(:meeting).permit(:name, :date, :available_duration, :meeting_description, :team, :activity)
  end

  def agenda_params(identification)
    params.require(":agenda_#{identification}").permit(:title, :description, :duration, :user)
  end
end
