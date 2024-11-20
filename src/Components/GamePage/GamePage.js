import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GamePage.css";

const GamesPage = () => {
  const [favorites, setFavorites] = useState([]);

  const games = [
    {
      id: 1,
      title: "Learning Adventure",
      link: "/games/adventure",
      image: "https://img.freepik.com/premium-vector/kids-enjoy-learning-math-games-outdoors-park-illustration_1323048-25776.jpg",
    },
    {
      id: 2,
      title: "Quiz Game",
      link: "/games/quiz",
      image: "https://img.freepik.com/premium-vector/kids-playing-quiz-game-smart-boys-girl-team-discussing-answer-question-together-competition-score-board-television-trivia-show-tv-entertainment_575670-2417.jpg?semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Math Challenge",
      link: "/games/math",
      image: "https://img.freepik.com/free-photo/close-up-bingo-game-elements_23-2149181889.jpg",
    },
    {
      id: 4,
      title: "Colors and Shapes Game", // New game
      link: "/games/colors-shapes", // Adjust the link to the route for the game
      image: "https://img.freepik.com/free-photo/colorful-shapes-on-white-background_23-2149485944.jpg", // Replace with a relevant image
    },
  ];

  const toggleFavorite = (game) => {
    if (favorites.some((fav) => fav.id === game.id)) {
      // Remove from favorites
      setFavorites(favorites.filter((fav) => fav.id !== game.id));
    } else {
      // Add to favorites
      setFavorites([...favorites, game]);
    }
  };

  return (
    <div className="games-page">
      <h1 className="games-title">Discover Fun and Educational Games</h1>
      <p className="games-subtitle">Choose a game to learn, explore, and enjoy!</p>

      {/* Games Grid */}
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />
            <p className="game-title">
              <Link to={game.link} className="game-link">
                {game.title}
              </Link>
            </p>
            <button
              className={`favorite-button ${favorites.some((fav) => fav.id === game.id) ? "favorited" : ""}`}
              onClick={() => toggleFavorite(game)}
            >
              {favorites.some((fav) => fav.id === game.id) ? "Remove Favorite" : "Add to Favorites"}
            </button>
          </div>
        ))}
      </div> 

      {/* Favorites Section */}
      {favorites.length > 0 && (
        <div className="favorites-section">
          <h2>Your Favorites</h2>
          <div className="favorites-grid">
            {favorites.map((fav) => (
              <div key={fav.id} className="favorite-card">
                <img src={fav.image} alt={fav.title} className="game-image" />
                <p className="game-title">
                  <Link to={fav.link} className="game-link">
                    {fav.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesPage;
