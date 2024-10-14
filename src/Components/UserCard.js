import React from "react";
import "./UserCard.css";
import UserProfile from "./UserProfile";

const UserCard = () => {
  const userData = {
    name: "Anna John",
    avatar: `${process.env.PUBLIC_URL}/useravatar.svg`,
    bio: "A software developer with a passion for building web applications.",
  };

  return (
    <UserProfile
      data={userData}
      render={(userDetails) => (
        <div className="user-card">
          <img src={userDetails.avatar} alt="Avatar" className="avatar" />
          <h2>{userDetails.name}</h2>
          <p>{userDetails.bio}</p>
        </div>
      )}
    />
  );
};

export default UserCard;
