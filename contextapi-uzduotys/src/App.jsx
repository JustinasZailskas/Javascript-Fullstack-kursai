import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import CounterResultContainer from "./components/CounterResultContainer";
import { CounterProvider } from "./services/CounterContext";

function App() {
  return (
    <CounterProvider>
      <div>
        <CounterResultContainer />
        <ButtonContainer />
      </div>
    </CounterProvider>
  );
}

export default App;
