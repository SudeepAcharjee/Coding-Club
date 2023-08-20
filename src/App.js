import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./page/home";
import Tutorials from "./page/Tutorials";
import Session from "./page/session";
import Notes from "./page/notes";
import Projects from "./page/projects";
import Contact from "./page/contact";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Tutorials">
        <Tutorials />
      </Route>

      <Route path="/session">
        <Session />
      </Route>

      <Route path="/notes">
        <Notes />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
