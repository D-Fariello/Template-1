import React from "react";
import SkillsList from "./SkillsList";
import Links from "./Links";

const SkillsSection = () => {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skillsDiv">
        <SkillsList skills={["JavaScript", "React", "HTML", "CSS"]} />
        <SkillsList skills={["Redux", "GitHub", "Leadership", "Jira"]} />
        <Links />
      </div>
    </div>
  );
};

export default SkillsSection;
