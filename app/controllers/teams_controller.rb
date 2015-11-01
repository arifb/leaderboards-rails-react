class TeamsController < ApplicationController

  def index
    @players = Player.all.to_json(include: { teams: { only: :last_name }})
  end

end
