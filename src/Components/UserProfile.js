import React from "react";

const UserProfile = (props) => {
  return (
     props.render(props.data)
  );
};
export default UserProfile;
