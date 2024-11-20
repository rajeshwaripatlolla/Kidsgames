import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./Theme/ThemeContect";
import "./Theme/Logout.css"

const Logout = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    toast.success("You have successfully logged out!", {
      position: "top-center",
      autoClose: 3000,
    });

    // Redirect after logout
    setTimeout(() => {
      navigate("/registration", { state: { isLogin: true } });
    }, 3000);
  }, [navigate]);

  return (
    <div className={`logout-container ${theme}`}>
      <ToastContainer />
      <div className="logout-card">
        <h2>{theme === "dark" ? "Goodbye! 🌙" : "Goodbye! ☀️"}</h2>
        <p>Thank you for using Baby Panda World! We hope to see you again soon.</p>
      </div>
    </div>
  );
};

export default Logout;
