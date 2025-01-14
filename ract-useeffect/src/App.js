import logo from "./logo.svg";
import "./App.css";
import UserTimerComponent from "./components/UserTimerComponent";

function App() {
  return (
    <div className="App">
      <section>
        <h3>Pirma uzduotis</h3>
        <UserTimerComponent />
      </section>
    </div>
  );
}

export default App;
