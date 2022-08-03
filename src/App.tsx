import React from "react";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";
import "./App.css";
import { useAuth } from "context/auth-context";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
