import React from "react";
import Header from "components/header/";
import Profile from "components/profile/";
import Skills from "components/skills/";
import Experiences from "components/experiences/";
import style from "css/style.css";

const App = () => {
  return(
    <div>
      <Header />
      <Profile />
      <Skills />
      <Experiences />
    </div>
  )
}

export default App;
