import { useContext } from "react";
import { Link } from "react-router";
import { useTheme } from "../services/HeaderContext";
import ChildrenProps from "../interface/ChildrenProps";

const Header = ({ children }: ChildrenProps) => {
  const { theme, toggleTheme } = useTheme();
  const headerStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  return (
    <header style={headerStyle}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/bn-plius">BN-plius</Link>
          </li>
          <li>
            <button onClick={toggleTheme}>Keisti tema</button>
          </li>
        </ul>
      </nav>
      {children}
    </header>
  );
};

export default Header;
