import React from "react";
import { ProjectList, Header, About } from "./index";

const Home = ({ getProject }) => {
  return (
    <>
      <Header />
      <About />
      <ProjectList getProject={getProject} />
    </>
  );
};

export default Home;
