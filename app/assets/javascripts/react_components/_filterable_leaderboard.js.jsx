var FilterableLeaderboard = React.createClass({
  getInitialState: function() {
    return { standings: new Array(), players: this.props.players };
  }, 


  // poll result of api call every minute
  componentDidMount: function() {
    this.getStandingsAndRankedPlayers();
    setInterval(this.getStandingsAndRankedPlayers, 1000 * 60);
  },


  render: function() {
    return (
      <div className="leaderboard">
        <Leaderboard players={this.state.players} standings={this.state.standings} />
      </div>
    );
  },


  getStandingsAndRankedPlayers: function() {
    $.get("/standings.json", function(result) {
      var standings = new Array();
      if (this.isMounted()) {
        result.standing.forEach(function(team) { 
          standings[team.last_name] = { won: team.won, lost: team.lost }; 
        });
        this.setState({ standings: standings });
        this.setPlayerScores(); 
        this.setRankedPlayers();
      }
    }.bind(this), "json");
  },


  setPlayerScores: function() {
    playersWithScores = JSON.parse(this.state.players).map(function(player) {
      var pts = 0;
      player.teams.forEach(function(team) {
        var team_standing = this.state.standings[team.last_name];
        pts               = pts + (team_standing ? ((team_standing.won - team_standing.lost) * 2) : 0);
      }, this);
      // add object repping score for player
      player.score = pts;
      return player;
    }, this);
    this.setState({ players: JSON.stringify(playersWithScores) });
  },

  
  setRankedPlayers: function() {
    playerObjects = JSON.parse(this.state.players);
    playerObjects.sort(function (a, b) {
      return parseFloat(b.score) - parseFloat(a.score); 
    });
    this.setState({ players: JSON.stringify(playerObjects) });
  }
});
