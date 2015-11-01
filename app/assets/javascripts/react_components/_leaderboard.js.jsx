var Leaderboard = React.createClass({
  render: function() {
    var rows = [];
    console.log(this.props);
    JSON.parse(this.props.players).forEach(function(player) {
      rows.push(<Player key={player.id} name={player.name} teams={player.teams} standings={this.props.standings} />);
    }, this);
    return (
      <table>
        <thead>
        <tr>
          <th>player</th>
          <th>w-l differential</th>
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
