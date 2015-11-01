['arif', 'jamie', 'adam r', 'adam h', 'steve', 'josh'].each do |u|
  Player.create(name: u)
end

teams = JSON.parse(Faraday.get('https://erikberg.com/nba/teams.json').body)

teams.each do |team|
  team = Team.find_or_create_by(first_name: team['first_name'], last_name: team['last_name'])
end

Player.where(name: 'arif').first.teams   << Team.where("last_name in ('Cavaliers', 'Lakers', 'Raptors', 'Wizards', 'Hornets')")
Player.where(name: 'adam r').first.teams << Team.where("last_name in ('Warriors', 'Heat', 'Jazz', 'Pistons', '76ers')")
Player.where(name: 'steve').first.teams  << Team.where("last_name in ('Spurs', 'Grizzlies', 'Pacers', 'Trail Blazers', 'Suns')")
Player.where(name: 'adam h').first.teams << Team.where("last_name in ('Clippers', 'Hawks', 'Mavericks', 'Kings', 'Nuggets')")
Player.where(name: 'josh').first.teams   << Team.where("last_name in ('Thunder', 'Pelicans', 'Celtics', 'Magic', 'Timberwolves')")
Player.where(name: 'jamie').first.teams  << Team.where("last_name in ('Rockets', 'Bulls', 'Bucks', 'Knicks', 'Nets')")
