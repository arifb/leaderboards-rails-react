['hopper', 'rennie', 'arif', 'jampots', 'samson', 'steveo'].each do |u|
  Player.create(name: u)
end

picks = %w(Warriors Cavaliers Spurs Clippers Thunder Rockets Bulls Pelicans Hawks Grizzlies Wizards Heat Raptors Bucks Pacers Celtics Jazz Mavericks Pistons Hornets Suns Kings Magic Knicks Nets Timberwolves Nuggets Trail\ Blazers Lakers 76ers)

teams = JSON.parse(Faraday.get('https://erikberg.com/nba/teams.json').body)

teams.each do |team|
  team = Team.find_or_create_by(first_name: team['first_name'], last_name: team['last_name'], pick: (picks.index(team['last_name']) + 1))
end

Player.where(name: 'arif').first.teams   << Team.where("last_name in ('Cavaliers', 'Wizards','Raptors',  'Hornets', 'Lakers')")
Player.where(name: 'rennie').first.teams << Team.where("last_name in ('Warriors', 'Heat', 'Jazz', 'Pistons', '76ers')")
Player.where(name: 'steveo').first.teams  << Team.where("last_name in ('Spurs', 'Grizzlies', 'Pacers', 'Suns', 'Trail Blazers')")
Player.where(name: 'hopper').first.teams << Team.where("last_name in ('Clippers', 'Hawks', 'Mavericks', 'Kings', 'Nuggets')")
Player.where(name: 'samson').first.teams   << Team.where("last_name in ('Thunder', 'Pelicans', 'Celtics', 'Magic', 'Timberwolves')")
Player.where(name: 'jampots').first.teams  << Team.where("last_name in ('Rockets', 'Bulls', 'Bucks', 'Knicks', 'Nets')")
