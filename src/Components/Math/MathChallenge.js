// src/pages/MathGame.jsx
import React, { useState } from "react";
import "./MathChallenge.css";

const MathGame = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [operation, setOperation] = useState(getRandomOperation());
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  function getRandomOperation() {
    const operations = ["+", "-", "*", "/", "fraction"];
    return operations[Math.floor(Math.random() * operations.length)];
  }

  const getQuestion = () => {
    switch (operation) {
      case "+":
        return `${num1} + ${num2}`;
      case "-":
        return `${num1} - ${num2}`;
      case "*":
        return `${num1} * ${num2}`;
      case "/":
        return `${num1 * num2} / ${num2}`; // Ensuring no fractional answers
      case "fraction":
        return `What is ${num1} / ${num2}? (Fraction format)`;
      default:
        return `${num1} + ${num2}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let correctAnswer;

    switch (operation) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
      case "/":
        correctAnswer = num1 * num2 / num2;
        break;
      case "fraction":
        correctAnswer = (num1 / num2).toFixed(2); // Answer as a decimal fraction
        break;
      default:
        correctAnswer = num1 + num2;
    }

    if (parseFloat(answer) === correctAnswer) {
      alert("Correct!");
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
    } else {
      alert("Try again!");
    }

    // Generate next question
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setOperation(getRandomOperation());
    setAnswer("");
  };

  return (
    <div className="game-page">
      <h1>Math Challenge</h1>
      <p>Solve the following math problem:</p>

      <div className="question-box">
        <h2>Question {questionNumber}</h2>
        <p>{getQuestion()}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
            className="answer-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <div className="score">
          <p>Your Score: {score}</p>
        </div>
      </div>
    </div>
  );
};

export default MathGame;
