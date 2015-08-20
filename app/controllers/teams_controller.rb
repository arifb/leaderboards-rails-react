class TeamsController < ApplicationController

  def index
    @teams = Team.all.to_json
  end

end
