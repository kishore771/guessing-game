import React, { useState } from "react";
import "./App.css";

function App() {
  const [target, setTarget] = useState(generateRandom());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandom() {
    return Math.floor(Math.random() * 100) + 1; // 1–100
  }

  const handleGuess = () => {
    const num = parseInt(guess);
    if (!num || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100.");
      return;
    }
    setAttempts(attempts + 1);

    if (num === target) {
      setMessage(
        `Correct! You guessed it in ${attempts + 1} attempts.`);
    } else if (num < target) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  const resetGame = () => {
    setTarget(generateRandom());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="app-background" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign: "center", marginTop: "50px" }}>
      <div className="app-card">
      <h1 style={{ fontSize: "36px", color: "#fca103"}}> Number Guessing Game</h1>
      <p style={{ fontSize: "24px", color: "#333"}}>Guess a number between 1 and 100</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        style={{ width: "200px", border: "1px solid #ccc", borderRadius: "4px",padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={handleGuess} style={{ background: "#007bff", color: "#fff", border: "none", borderRadius: "4px",padding: "12px 16px", margin: "20px", cursor: "pointer" }}>
        Guess
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px", color: "#fc0000ff"}}>{message}</p>
      <p style={{ marginTop: "20px", fontSize: "18px", color: "#fc0000ff"}}>Attempts: {attempts}</p>

      <button
        onClick={resetGame}
        style={{ border: "none", borderRadius: "4px",marginTop: "20px", padding: "8px 16px", background: "orange" , color: "#fff", cursor: "pointer" }}
      >
        Restart Game
      </button>
      </div>
    </div>
  );
}

export default App;
