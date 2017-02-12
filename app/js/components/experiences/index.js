import React from "react";
import { Section } from "components/grid/";
import EmpregosRN from "./experiences/empregosrn.js";
import Tribuna from "./experiences/tribuna.js";
import Ecostage from "./experiences/ecostage.js";

const Experiences = () => {
  return (
    <Section
      title="Experiences"
      subheading={'Let me tell more about me, ok?'}
      id="experiences">

      <EmpregosRN />
      <Tribuna />
      <Ecostage />
    </Section>
  );
};

export default Experiences;
