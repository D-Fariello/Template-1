import React from "react";

const SkillsList = ({ skills }) => {
  return (
    <ul className="skillsList">
      {skills.map((skill, index) => (
        <li key={index} className="buttonsList">
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
