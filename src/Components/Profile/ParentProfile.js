import React from "react";

const ParentProfile = () => {
  return (
    <div className="profile-page">
      <h1>Parent Profile</h1>
      <p>Welcome, [Parent Name]!</p>
      <h2>Manage Children Profiles</h2>
      <ul>
        <li>Child 1: [Edit Profile]</li>
        <li>Child 2: [Edit Profile]</li>
      </ul>
    </div>
  );
};

export default ParentProfile;
