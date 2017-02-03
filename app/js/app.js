import React from "react";
import Header from "components/header/";
import Profile from "components/profile/";
import Skills from "components/skills/";
import Experiences from "components/experiences/";
import References from "components/references/";
import Footer from "components/footer/";
import style from "css/style.css";

const App = () => {
  return(
    <div>
      <Header />
      <Profile />
      <Skills />
      <Experiences />
      <References />
      <Footer />
    </div>
  )
}

export default App;
