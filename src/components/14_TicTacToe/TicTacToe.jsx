import React, { useEffect, useState } from "react";
import "./game.css";

function Square({ value, onClick }) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}

function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(false);

  function handleClick(index) {
    if (disabled) return;
    let cpySquares = [...square];
    if (cpySquares[index]) return;
    cpySquares[index] = turn ? "X" : "O";
    setSquare(cpySquares);
    setTurn(!turn);
  }

  function getWinner(square) {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < patterns.length; i++) {
      const [a, b, c] = patterns[i];
      if (square[a] && square[a] == square[b] && square[a] == square[c])
        return square[a];
    }
    return null;
  }

  function handleRestart() {
    setSquare(Array(9).fill(""));
    setTurn(true);
    setDisabled(false);
  }

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item != ""))
      setStatus("Match drawn...Please restart the game");
    else if (getWinner(square)) {
      setStatus(`${getWinner(square)} won the match...Please restart the game`);
      setDisabled(true);
    } else setStatus(`${turn ? "X" : "O"}'s turn`);
  }, [square, turn]);

  return (
    <div className="container">
      <div className="row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default TicTacToe;
