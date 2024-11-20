import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css"

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="profile">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile-info">
          <div className="profile-img">
            <img src={user.profilePicture} alt="Profile" width="100" />
          </div>
          <div className="profile-details">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mobile:</strong> {user.mobile}</p>
            <p><strong>Parent:</strong> {user.isParent ? "Yes" : "No"}</p>
          </div>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
      <Link to="/" className="back-link">Back to Homepage</Link>
    </div>
  );
};

export default Profile;
