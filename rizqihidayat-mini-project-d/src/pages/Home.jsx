import React from "react";
import First from "../components/First";
import Project from "../components/Project";
import Kepanitiaan from "../components/Kepanitiaan";
import Organisasi from "../components/Organisasi";
import Documentation from "../components/Documentation";
import Address from "../components/Address";
import Skill from "../components/Skill";

function Home() {
  return (
    <div>
      <First />
      <Skill />
      <Organisasi />
      <Project />
      <Kepanitiaan />
      <Documentation />
      <Address />
    </div>
  );
}

export default Home;
