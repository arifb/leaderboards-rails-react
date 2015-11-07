var Leaderboard = React.createClass({
  render: function() {
    rows = JSON.parse(this.props.players).map(function(player) {
      return (<Player key={player.id} name={player.name} teams={player.teams} score={player.score} standings={this.props.standings} />);
    }, this);
    return (
      <table className="table">
        <thead>
        <tr>
          <th></th>
          <th>score</th>
        </tr>
      </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});
