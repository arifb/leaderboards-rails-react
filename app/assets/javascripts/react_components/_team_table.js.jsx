var TeamTable = React.createClass({
  render: function() {
    var rows = [];
    var lastDivision = null;
    JSON.parse(this.props.teams).forEach(function(team) {
      /*if (team.division !== lastDivision) {
        rows.push(<TeamDivisionRow division={team.division} key={team.division} />);
        }*/
      rows.push(<TeamRow team={team} key={team.last_name} />);
      /*lastDivision = team.division;*/
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

$(function() {
  var api = "https://erikberg.com/nba/standings.json";
  /*
  $.getJSON(api, function(data) {
    console.log(data)
  });
  */
  $.ajax({
    url: api,
    dataType: "json",
    success: function (data) {
      console.log(JSON.parse(data));
    }
  });
});
