var FilterableLeaderboard = React.createClass({
  getInitialState: function() {
    return { standings: new Array() };
  }, 

  /* poll result of api call every minute */
  componentDidMount: function() {
    this.getStandings();
    setInterval(this.getStandings, 1000 * 60);
  },

  render: function() {
    return (
      <div className="leaderboard">
        <Leaderboard players={this.props.players} standings={this.state.standings} />
      </div>
    );
  },

  /* ajax request to get team records */
  getStandings: function() {
    $.get("/standings.json", function(result) {
      var standings = new Array();
      if (this.isMounted()) {
        console.log(typeof result);
        result.standing.forEach(function(team) { 
          standings[team.last_name] = { won: team.won, lost: team.lost }; 
        });
        this.setState({standings: standings});
      }
    }.bind(this), "json");
  }
});
