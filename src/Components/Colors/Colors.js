import React, { useState, useEffect } from "react";
import "./Colors.css";

const shapes = ["circle", "square", "triangle", "rectangle"];
const colors = ["red", "green", "blue", "yellow"];

const ColorsAndShapesGame = () => {
  const [currentShape, setCurrentShape] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [score, setScore] = useState(0);

  // Function to generate a random shape and color
  const generateRandomShapeAndColor = () => {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentShape(randomShape);
    setCurrentColor(randomColor);
  };

  // Handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(color);
    if (color === currentColor) {
      setScore(score + 1);
      alert("Correct! Well Done!");
    } else {
      alert("Oops! Try again.");
    }
    generateRandomShapeAndColor();
  };

  // Start the game when the component mounts
  useEffect(() => {
    generateRandomShapeAndColor();
  }, []);

  return (
    <div className="game-container">
      <h2 className="game-title">Colors and Shapes Game</h2>
      <p className="game-instruction">Match the shape with the correct color!</p>
      <div className="game-board">
        {/* Display the current shape */}
        <div
          className={`shape ${currentShape}`}
          style={{
            backgroundColor: currentColor,  // Apply the current color to the shape
          }}
        ></div>

        {/* Color options to select from */}
        <div className="color-options">
          {colors.map((color, index) => (
            <button
              key={index}
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></button>
          ))}
        </div>

        {/* Display score */}
        <div className="score">
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorsAndShapesGame;
