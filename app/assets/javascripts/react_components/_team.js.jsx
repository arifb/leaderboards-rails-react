var Team = React.createClass({
  render: function() {
    return (
      <span className="teams">
        {this.props.team} {this.props.record ? this.props.record.won : '0'}-{this.props.record ? this.props.record.lost : '0'} {" "}
      </span>
    )
  }
});
