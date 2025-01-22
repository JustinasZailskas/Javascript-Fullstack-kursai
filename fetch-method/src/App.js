import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/PostComponent";
import Posts2 from "./components/PostComponent2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DynamicData from "./components/DynamicData";
import FilterData from "./components/FilterData";
import PostData from "./components/PostData";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
        <Posts2 />
      </QueryClientProvider> */}
      <PostData />
      <DynamicData />
      <FilterData />
    </div>
  );
}

export default App;
