import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import { Tabs, TabList, Tab, TabContent } from 'components/utils/tabs';
import { Javascript, HtmlCss, UxUi } from './skills/';
import style from "./skills.css";

const Skills = () => {
  return(
    <Section
      title="Skills"
      subheading={'Let me tell more about me, ok?'}
      id="skills">

      <div className={style.skill}>
        <Tabs>
          <TabList className={style.skill__options}>
            <Tab tabName="javascript" className={style.skill__option}>Javascript</Tab>
            <Tab tabName="html_css" className={style.skill__option}>HTML/CSS</Tab>
            <Tab tabName="ux_ui" className={style.skill__option}>UX/UI Design</Tab>
            <Tab tabName="project_management" className={style.skill__option}>Project Management</Tab>
            <Tab tabName="seo" className={style.skill__option}>SEO</Tab>
            <Tab tabName="extra_skills" className={style.skill__option}>Extra Skills</Tab>
          </TabList>

          <TabContent contentController="javascript">
            <Javascript />
          </TabContent>

          <TabContent contentController="html_css">
            <HtmlCss />
          </TabContent>

          <TabContent contentController="ux_ui">
            <UxUi />
          </TabContent>
        </Tabs>
      </div>
    </Section>
  )
}

export default Skills;
