var Player = React.createClass({
  render: function() {
    return (
      <div>
      <tr>
        <td>
          {this.props.name}
        </td>
        <td></td>
      </tr>
      <TeamRow teams={this.props.teams} standings={this.props.standings} />
      </div>
    );
  }
});
