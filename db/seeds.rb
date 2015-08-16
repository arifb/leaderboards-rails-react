teams = JSON.parse(Faraday.get('https://erikberg.com/nba/teams.json').body)
teams.each do |team|
  conference = Conference.find_or_create_by(name: team['conference'].downcase)
  division   = Division.find_or_create_by(name: team['division'].downcase)
  team       = Team.find_or_create_by(first_name: team['first_name'].downcase, last_name: team['last_name'].downcase)

  conference.divisions << division unless conference.divisions.exists?(name: division.name)
  division.teams       << team unless division.teams.exists?(first_name: team['first_name'].downcase, last_name: team['last_name'].downcase)
end
