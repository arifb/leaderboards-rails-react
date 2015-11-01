var TeamRow = React.createClass({
  render: function() {
    var rows = [];
    this.props.teams.forEach(function(team) {
      rows.push(<Team key={team.last_name} team={team.last_name} record={this.props.standings[team.last_name]} />);
    }, this);
    return (
      <tr>
        <td>{rows}</td>
      </tr>
    );
  }
});
