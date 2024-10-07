import React, { useState } from "react";
import "./LuckySpin.css";

const LuckySpin = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const segments = [100, 200, 300, 400, 500, 600, 700, 800];
  const segmentAngle = 360 / segments.length;
  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    const randomIndex = Math.floor(Math.random() * segments.length);
    const randomExtraRotations = Math.floor(Math.random() * 360);
    const finalRotation =
      rotation + 360 * 5 + randomExtraRotations - randomIndex * segmentAngle;

    setRotation(finalRotation);
    setTimeout(() => {
      const normalizedRotation = finalRotation % 360;
      const winningIndex = Math.floor(normalizedRotation / segmentAngle);

      const selectedResult =
        segments[((segments.length - 1 - winningIndex) % segments.length) - 1];
      setResult(selectedResult);
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="lucky-spin-container">
      <h1 className='luckyspin'>Lucky Spin</h1>

      <div className="wheel-container">
        <div
          className={`wheel ${spinning ? "spinning" : ""}`}
          style={{ transform: `rotate(${rotation}deg)` }}
          id="wheel"
        >
          {segments.map((reward, index) => (
            <div key={index} className={`segment segment-${index + 1}`}>
              <span>{reward} </span> 
            </div>
          ))}
          
        </div>
        <div className="arrow" />
        <button onClick={handleSpin} className="spin-button" disabled={spinning}>
        {spinning ? "" : "SPIN"}
      </button>
          </div>
     
{result !== null && <div className="result">You won: {result}</div>}
    </div>
  );
};

export default LuckySpin;
      