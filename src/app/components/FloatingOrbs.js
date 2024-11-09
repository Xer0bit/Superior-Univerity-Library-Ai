
"use client";

import { useState, useEffect } from "react";

const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const newOrbs = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      color: ['rgba(147,197,253,0.4)', 'rgba(167,139,250,0.4)', 'rgba(196,181,253,0.4)'][
        Math.floor(Math.random() * 3)
      ],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setOrbs(newOrbs);
  }, []);

  if (orbs.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            width: `${orb.width}px`,
            height: `${orb.height}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;