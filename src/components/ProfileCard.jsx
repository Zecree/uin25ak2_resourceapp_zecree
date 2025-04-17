import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ member }) {
  const isMarcus1 = member.name === "Marcus 1";

  return (
    <div className="profile-card">
      {isMarcus1 ? (
        <Link to="/marcus1">
          <img src={member.image} alt={member.name} className="profile-image" />
        </Link>
      ) : (
        <img src={member.image} alt={member.name} className="profile-image" />
      )}

      <div className="profile-text">
        <h3>{member.name}</h3>
        <a href={`mailto:${member.email}`}>{member.email}</a>
      </div>
    </div>
  );
}

export default ProfileCard;