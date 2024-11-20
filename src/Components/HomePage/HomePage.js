import React from "react";
import "./HomePage.css"; // Import the CSS file for styles
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for redirection
import { useTheme } from "../Theme/ThemeContect";


const HomePage = () => {
  const { theme } = useTheme(); // Get the theme value
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handlePlayGamesClick = () => {
    // Redirect to the games page when the button is clicked
    navigate("/games"); // Navigate to the /games route
  };

  return (
    <div className={`homepage ${theme}`}> {/* Dynamically applying the theme class */}
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <p>We are thrilled to have you, Guest!</p> {/* Replace with dynamic user */}
          <h1>Explore Fun and Educational Games!</h1>
          <p>Discover exciting games to enhance your learning experience.</p>
          <button className="heroButton" onClick={handlePlayGamesClick}>
            Play Games
          </button>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="games-section">
        <h2 className="section-title">Featured Games</h2>
        <div className="games">
          <div className="game-card">
            <img
              src="https://img.freepik.com/premium-vector/kids-enjoy-learning-math-games-outdoors-park-illustration_1323048-25776.jpg"
              alt="Learning Adventure"
              className="game-image"
            />
            <p className="game-title">Learning Adventure</p>
          </div>
          <div className="game-card">
            <img
              src="https://img.freepik.com/premium-vector/game-children-find-correct-shape-match-shapes-logic-worksheet-kids-development_255592-979.jpg"
              alt="Color & Shapes"
              className="game-image"
            />
            <p className="game-title">Color & Shapes</p>
          </div>
          <div className="game-card">
            <img
              src="https://img.freepik.com/premium-vector/kids-playing-quiz-game-smart-boys-girl-team-discussing-answer-question-together-competition-score-board-television-trivia-show-tv-entertainment_575670-2417.jpg?semt=ais_hybrid"
              alt="Quiz Game"
              className="game-image"
            />
            <p className="game-title">Quiz Game</p>
          </div>
          <div className="game-card">
            <img
              src="https://img.freepik.com/free-photo/close-up-bingo-game-elements_23-2149181889.jpg"
              alt="Math Challenge"
              className="game-image"
            />
            <p className="game-title">Math Challenge</p>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="educational-content">
  <h2 className="section-title">Educational Resources</h2>
  <p>Enhance your knowledge with our exciting educational content!</p>
  <div className="content-items">
    <div className="content-item">
      <h3>Math Puzzles</h3>
      <p>Solve engaging puzzles that enhance logical reasoning and math skills. Improve your problem-solving abilities while having fun!</p>
    </div>
    <div className="content-item">
      <h3>Reading Corner</h3>
      <p>Discover stories and articles designed to boost reading comprehension. Cultivate a love for reading while expanding your vocabulary!</p>
    </div>
    <div className="content-item">
      <h3>Science Experiments</h3>
      <p>Explore fun and easy experiments to learn science concepts hands-on. Dive into the world of science and spark your curiosity!</p>
    </div>
  </div>
</section>


      {/* Contact Us Section */}
      <footer className="contact-us">
        <h3>Contact Us</h3> 
        <p>If you have any questions or feedback, feel free to reach out!</p>
        <div className="contact-details">
          <p>Email: support@babypandaworld.com</p>
          <p>Phone: +917396898402</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
