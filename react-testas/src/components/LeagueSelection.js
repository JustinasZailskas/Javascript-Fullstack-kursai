import { Component } from "react";

class LeagueSelection extends Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        {this.props.test}
      </nav>
    );
  }
}

export default LeagueSelection;
