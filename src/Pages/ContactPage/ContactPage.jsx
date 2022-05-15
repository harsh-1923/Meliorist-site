import React from "react";
import "./ContactPage.css";
import DATA from "../../DATA.js";
import TeamMemberCard from "../../Components/TeamPageComponents/TeamMemberCard/TeamMemberCard.jsx";

const ContactPage = () => {
  console.log(DATA.member);

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-title">
        Without bonding and co-ordination, every project is a failure. Look at
        who makes KICKSUP great. ;)
      </div>

      <div className="contact-page-members-wrapper">
        {DATA.member.map((mem, id) => {
          return (
            <div>
              <TeamMemberCard
                name={mem.name}
                profile={mem.profilePic}
                role={mem.role}
                links={mem.links}
              />
            </div>
          );
        })}
      </div>


      <p className="contact-page-footnote"> and YOU ;)</p>
    </div>
  );
};

export default ContactPage;
