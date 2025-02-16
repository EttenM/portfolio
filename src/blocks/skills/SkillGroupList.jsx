import React from "react";

const SkillGroupList = ({ liTitle, list, toggleList }) => {
  return (
    <li className="skill_group_title" onClick={toggleList}>
      {liTitle}
      <ul className="list">
        <div className="overflow-hidden">
          {list.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </div>
      </ul>
    </li>
  );
};

export default SkillGroupList;
