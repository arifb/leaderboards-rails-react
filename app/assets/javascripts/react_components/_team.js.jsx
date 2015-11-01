var Team = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.team} {this.props.record ? this.props.record.won : '0'} - {this.props.record ? this.props.record.lost : '0'}  {" "}
      </span>
    )
  }
});
