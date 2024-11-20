import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isParent, setIsParent] = useState(false);
  const [guardianContact, setGuardianContact] = useState("");
  const [theme, setTheme] = useState("light"); // Default theme preference

  const location = useLocation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(location.state?.isLogin || false);

  useEffect(() => {
    if (isLogin) {
      toast.info("Please login to continue.", { autoClose: 2000 });
    }
  }, [isLogin]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }

    const user = {
      username,
      email,
      mobile,
      profilePicture,
      isParent,
      guardianContact,
      password,
      theme, // Save the theme preference
    };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Registration successful!", { autoClose: 3000 });

    setTimeout(() => {
      navigate("/profile");
    }, 3000);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempted with:", { email, password });

    toast.success("Login successful!", { autoClose: 2000 });
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="registration">
      <ToastContainer />
      <h2>{isLogin ? "Login to Your Account" : "Register an Account"}</h2>
      <form
        onSubmit={isLogin ? handleSubmitLogin : handleSubmitRegistration}
        className="registration-form"
      >
        {!isLogin && (
          <>
            {/* Registration Fields */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Profile Picture Upload */}
            <div className="form-group">
              <label htmlFor="profilePicture">Profile Picture</label>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
              />
              {profilePicture && <img src={profilePicture} alt="Profile" width="100" />}
            </div>

            {/* Parental Access */}
            <div className="form-group">
              <label>
                Are you a Guardian/Parent?
                <input
                  type="checkbox"
                  checked={isParent}
                  onChange={() => setIsParent((prev) => !prev)}
                />
              </label>
              {isParent && (
                <div className="form-group">
                  <label htmlFor="guardianContact">Guardian's Contact</label>
                  <input
                    type="tel"
                    id="guardianContact"
                    placeholder="Enter guardian's contact"
                    value={guardianContact}
                    onChange={(e) => setGuardianContact(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>

            {/* Theme Preference */}
            {/* <div className="form-group">
              <label htmlFor="theme">Theme Preference</label>
              <select
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                required
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div> */}
          </>
        )}

        {isLogin && (
          <>
            {/* Login Fields */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <div className="toggle-link">
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "#ff6600", cursor: "pointer" }}
          >
            {isLogin ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
