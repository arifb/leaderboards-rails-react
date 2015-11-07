var Player = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          <span className="name">{this.props.name}</span><br />
          <TeamRow teams={this.props.teams} standings={this.props.standings} />
        </td>
        <td className="td-center">
          <span className="score">
            {this.props.score}
          </span>
        </td>
      </tr>
    );
  }
});
