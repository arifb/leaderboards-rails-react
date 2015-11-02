var TeamRow = React.createClass({
  render: function() {
    var rows = [];
    var pts  = 0;
    this.props.teams.forEach(function(team) {
      var team_standing = this.props.standings[team.last_name]
      pts               = pts + (team_standing ? ((team_standing.won - team_standing.lost) * 2) : 0)
      rows.push(<Team key={team.last_name} team={team.last_name} record={team_standing} />);
    }, this);
    return (
      <tr>
        <td>{rows}</td>
        <td className="td-center">
          <span className="score">
            {pts}
          </span>
        </td>
      </tr>
    );
  }
});
