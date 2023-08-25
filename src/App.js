import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./page/home";
import Tutorials from "./page/Tutorials";
import Session from "./page/session";
import Notes from "./page/notes";
import Projects from "./page/projects";
import Contact from "./page/contact";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/components/GlobalStyle";



const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "",
      bg: "blueviolet",
      footer_bg: "blueviolet",
      btn: "purple",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
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
    </ThemeProvider>
  );
};

export default App;
