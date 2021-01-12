import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/styles.css";
import { Project, Nav, Footer, Home, ScrollToTop } from "./components/index";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { data } from "./projectData";
import Motion from "./components/project/Motion";

const App = () => {
  const [projectData, setProjectData] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const getProject = (project) => {
    const projectData = data.filter(
      (item) => item.project.pathname === project
    );

    const currentProjectI = (item) => item.project.pathname === project;
    setCurrentProject(data.findIndex(currentProjectI));

    setProjectData({
      project: projectData[0].project,
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <Container maxWidth="100vw" className="main">
        <div id="home"></div>
        <CssBaseline />
        <Nav />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home getProject={getProject} />}
          />
          <Route
            exact
            path="/project/motion"
            render={(props) => <Motion {...props} getProject={getProject} />}
          />
          <Route
            exact
            path="/project/:id"
            render={(props) => (
              <Project
                {...props}
                projectData={projectData}
                getProject={getProject}
                currentProject={currentProject}
                data={data}
              />
            )}
          />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
