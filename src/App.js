import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import { AuthContextProvider } from "./contexts/AuthContext";
import { FirebaseContextProvider } from "./contexts/FirebaseContext";
import { Routes } from "./routes";

function App() {
  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        <Router>
          <Routes />
        </Router>
      </AuthContextProvider>
    </FirebaseContextProvider>
  );
}

export default App;