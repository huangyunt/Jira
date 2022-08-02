import React from "react";
import "./App.css";
import { LoginScreen } from "screens/login";
import { ProjectListScreen } from "screens/project-list";
function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <ProjectListScreen /> */}
    </div>
  );
}

export default App;
