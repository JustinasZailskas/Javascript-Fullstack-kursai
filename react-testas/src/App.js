import logo from "./logo.svg";
import "./App.css";
import LeagueSelection from "./components/LeagueSelection";
import Season from "./components/Season";

const leaguesArray = [
  { id: 1, title: "Street" },
  { id: 2, title: "Semi Pro" },
  { id: 3, title: "PRO" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeagueSelection data={leaguesArray} test="test" />
        <Season />
      </header>
      <footer>
        <LeagueSelection data={leaguesArray} />
      </footer>
    </div>
  );
}

export default App;
