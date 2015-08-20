var TeamRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.team.last_name}</td>
        <td>{this.props.team.wins}</td>
        <td>{this.props.team.losses}</td>
      </tr>
    );
  }
});
