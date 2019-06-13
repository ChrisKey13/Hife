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
      start_time: DateTime.strptime(meeting_params["date"], '%Y-%m-%d %H:%M'),
      available_duration: meeting_params["duration"],
      description: meeting_params["meeting_description"]
    )
    @meeting.team = Team.find(meeting_params["team"])

    (0..find_number_of_bullet_in_agenda).to_a.each do |number|
      Agenda.create(
        meeting: @meeting,
        title: meeting_params[:agendas][number.to_s][:title],
        duration: meeting_params[:agendas][number.to_s][:duration],
        description: meeting_params[:agendas][number.to_s][:description],
        user_id: meeting_params[:agendas][number.to_s][:user]
      )
    end
    @meeting.activity = Activity.find(meeting_params["activity_ids"][1])

    if @meeting.save
      sleep(3.5)
      redirect_to dashboard_path
    else
      render :new
    end
  end

  private

  def meeting_params
    params.require(:meeting).permit(:name, :date, :duration, :meeting_description, :team, activity_ids: [], agendas: {})
  end

  def find_number_of_bullet_in_agenda
    i = 0
    i += 1 unless params["agenda#{i}"].nil?
    return i
  end
end
