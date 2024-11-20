// src/pages/QuizGame.jsx
import React, { useState } from "react";
import "./QuizGame.css";

const QuizGame = () => {
  // Array of questions and answers
  const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What color is the sky?", answer: "blue" },
    { question: "What animal says 'Meow'?", answer: "cat" },
    { question: "What is the opposite of hot?", answer: "cold" },
    { question: "What is 5 + 3?", answer: "8" },
    { question: "How many legs does a spider have?", answer: "8" },
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What shape has 3 sides?", answer: "triangle" },
    { question: "How many days are there in a week?", answer: "7" },
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },
    { question: "What is the color of grass?", answer: "green" },
    { question: "What is the name of the dog in 'Tom and Jerry'?", answer: "spike" },
    { question: "What do you use to write?", answer: "pen" },
    { question: "Which bird can talk?", answer: "parrot" },
    { question: "How many continents are there?", answer: "7" },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (answer.toLowerCase() === correctAnswer) {
      alert("Correct!");
      setScore(score + 1);
    } else {
      alert("Try again!");
    }

    // Move to the next question or show result
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Over! Your score is ${score + 1} out of ${questions.length}`);
      setScore(0); // Reset score for next round
      setCurrentQuestionIndex(0); // Reset question index
    }
    setAnswer("");
  };

  return (
    <div className="game-page">
      <h1>Quiz Game</h1>
      <p className="description">Answer the following question:</p>
      <div className="question-box">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{questions[currentQuestionIndex].question}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
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

export default QuizGame;
