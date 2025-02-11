import { Routes, Route } from "react-router";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./pages/PrivateRoute";
import PrivateContent from "./pages/PrivateContent";
import { AuthProvider } from "./services/AuthContext";
import Header from "./components/Header";
import { HeaderProvider } from "./services/HeaderContext";

function App() {
  return (
    <HeaderProvider>
      <AuthProvider>
        <Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/bnplius"
              element={
                <PrivateRoute>
                  <PrivateContent />
                </PrivateRoute>
              }
            />
          </Routes>
        </Header>
      </AuthProvider>
    </HeaderProvider>
  );
}

export default App;
