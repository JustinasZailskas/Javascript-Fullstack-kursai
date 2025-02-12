import { Routes, Route } from "react-router";
import NavigationComponent from "../components/NavigationComponent";
import Home from "../pages/Home";
import FirstTask from "../pages/FirstTask";
import SecondTask from "../pages/SecondTask";

const AppRoutes = () => {
  return (
    <>
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-task" element={<FirstTask />} />
        <Route path="/second-task" element={<SecondTask />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
