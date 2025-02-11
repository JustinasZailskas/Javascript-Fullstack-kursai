import { useContext } from "react";
import { CounterContext } from "../services/CounterContext";

const useCounter = () => {
  return useContext(CounterContext);
};

export default useCounter;
