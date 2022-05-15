import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ name, role, profile, links }) => {
  return (
    <div className="team-member-card-wrapper">
      <div className="team-member-card-img-wrapper">
        <img className="test-img" src={profile}></img>
      </div>
      <p className="member-name">{name}</p>
      <p className="member-role">{role}</p>

      {/* <div className="team-member-card-smlinks-wrapper">
        {links.map((sm, key) => {
          return() 
          }
        })}
      </div> */}
    </div>
  );
};

export default TeamMemberCard;
