import logo from "./logo.svg";
import "./App.css";
import LeagueSelection from "./components/LeagueSelection";
import Season from "./components/Season";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";
import ContactCard from "./components/ContactCard";
import Hobbies from "./components/Hobbies";
import Counter from "./components/Counter";

const leaguesArray = [
  { id: 1, title: "Street" },
  { id: 2, title: "Semi Pro" },
  { id: 3, title: "PRO" },
];
const hobbiesList = [
  { id: 1, title: "Krepsinis" },
  { id: 2, title: "Driftas" },
  { id: 3, title: "Krepsinio podkastu klausymas" },
  { id: 4, title: "F1 ir WRC stebejimas" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings />
      </header>
      <section>
        <AboutMe
          firstname="Justinas"
          lastname="Zailskas"
          profession="Lecture"
          aboutYou="It is a description about me."
        />

        <ContactCard
          firstname="Jonas"
          phonenumber="+37060000000"
          email="jonas@gmail.com"
        />
        <ContactCard
          firstname="Petras"
          phonenumber="+37060000000"
          email="petras@gmail.com"
        />
      </section>
      <section>
        <Hobbies hobbiesList={hobbiesList} />
        <Counter />
      </section>
      <footer>
        <LeagueSelection data={leaguesArray} />
      </footer>
    </div>
  );
}

export default App;
