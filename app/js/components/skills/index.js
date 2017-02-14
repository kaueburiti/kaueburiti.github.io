import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import { Tabs, TabList, Tab, TabContent } from 'components/utils/tabs';
import {
  Javascript,
  HtmlCss,
  Design,
  ProjectManagement,
  ExtraSkills
} from './skills/';
import style from "./skills.css";

const Skills = () => {
  return(
    <Section
      title="Skills"
      subheading={'"But what I do have are a very particular set of skill..." (TAKEN, 2008)'}
      id="skills">

      <div className={style.skill}>
        <Tabs>
          <TabList className={style.skill__options}>
            <Tab tabName="javascript" className={style.skill__option}>Javascript</Tab>
            <Tab tabName="html_css" className={style.skill__option}>HTML/CSS</Tab>
            <Tab tabName="design" className={style.skill__option}>Design</Tab>
            <Tab tabName="project_management" className={style.skill__option}>Project Management</Tab>
            <Tab tabName="extra_skills" className={style.skill__option}>Extra Skills</Tab>
          </TabList>

          <TabContent className={style.skill__tabContent} contentController="javascript">
            <Javascript />
          </TabContent>

          <TabContent className={style.skill__tabContent} contentController="html_css">
            <HtmlCss />
          </TabContent>

          <TabContent className={style.skill__tabContent} contentController="design">
            <Design />
          </TabContent>

          <TabContent className={style.skill__tabContent} contentController="project_management">
            <ProjectManagement />
          </TabContent>

          <TabContent className={style.skill__tabContent} contentController="extra_skills">
            <ExtraSkills />
          </TabContent>
        </Tabs>
      </div>
    </Section>
  )
}

export default Skills;
