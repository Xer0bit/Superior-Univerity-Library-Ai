
'use client';

import { useState, useEffect } from 'react';

// Generate initial static positions
const initialParticles = Array(20).fill(null).map((_, i) => ({
  id: i,
  left: '50%',
  top: '50%',
  width: '4px',
  height: '4px',
  duration: '7s'
}));

export default function ParticlesBackground() {
  const [particles, setParticles] = useState(initialParticles);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Only randomize positions after initial mount
    setParticles(prev => prev.map(particle => ({
      ...particle,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      duration: `${Math.random() * 10 + 5}s`
    })));
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2)_0%,rgba(0,0,0,0)_100%)]" />
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle absolute bg-blue-400/20 rounded-full transition-all duration-1000 ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.width,
            height: particle.height,
            animation: isMounted ? `float ${particle.duration} linear infinite` : 'none'
          }}
        />
      ))}
    </div>
  );
}