var FilterableTeamTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <TeamTable teams={this.props.teams} />
      </div>
    );
  }
});
