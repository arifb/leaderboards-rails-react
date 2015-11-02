var Leaderboard = React.createClass({
  render: function() {
    var rows = [];
    JSON.parse(this.props.players).forEach(function(player) {
      rows.push(<Player key={player.id} name={player.name} teams={player.teams} standings={this.props.standings} />);
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
