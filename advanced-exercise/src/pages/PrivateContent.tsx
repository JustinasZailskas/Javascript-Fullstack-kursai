import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

function PrivateContent() {
  const { logout } = useAuth();

  return (
    <>
      <p>Privati informacija</p>
      <button onClick={logout}>Atsijungti</button>
    </>
  );
}

export default PrivateContent;
