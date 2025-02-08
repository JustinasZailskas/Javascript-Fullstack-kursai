import { Routes, Route } from "react-router";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./pages/PrivateRoute";
import PrivateContent from "./pages/PrivateContent";
import React from "react";
import { AuthProvider } from "./services/AuthContext";
function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
