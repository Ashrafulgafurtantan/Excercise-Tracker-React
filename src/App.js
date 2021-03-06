import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/NavBar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUsers";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <hr color="gray" width="35%" size="7" />
        <Switch>
          <Route exact path="/" component={ExercisesList} />
          <Route exact path="/edit/:id" component={EditExercise} />
          <Route exact path="/create" component={CreateExercise} />
          <Route exact path="/user" component={CreateUser} />
        </Switch>
        {/* <hr color="gray" width="35%" size="7" /> */}
      </div>
    </Router>
  );
}

export default App;
