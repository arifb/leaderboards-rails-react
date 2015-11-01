var TeamRow = React.createClass({
  render: function() {
    var rows = [];
    var pts  = 0;
    this.props.teams.forEach(function(team) {
      pts       = this.props.standings[team.last_name] ? this.props.standings[team.last_name].won * 2 : 0
      rows.push(<Team key={team.last_name} team={team.last_name} record={this.props.standings[team.last_name]} />);
    }, this);
    return (
      <tr>
        <td>{rows}</td>
        <td>{pts}</td>
      </tr>
    );
  }
});
