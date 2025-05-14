
import React, { useEffect, useState } from "react";
import '../styles/PandaCounter.css'

const PandaCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const target = 5000;

  useEffect(() => {
    const increment = Math.ceil(target / 1000); // шаг
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return Math.min(prev + increment, target);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 20); // скорость

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-number">{count.toLocaleString()}</div>
      <div className="counter-label">успешных доставок розницы и опта</div>
    </div>
  );
};

export default PandaCounter;
