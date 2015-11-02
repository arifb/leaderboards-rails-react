var Player = React.createClass({
  render: function() {
    return (
      <div>
      <tr>
        <td>
          <span className="name">{this.props.name}</span><br />
        </td>
        <td></td>
      </tr>
      <TeamRow teams={this.props.teams} standings={this.props.standings} />
      </div>
    );
  }
});
