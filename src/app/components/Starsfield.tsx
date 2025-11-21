'use client';

import { motion } from 'framer-motion';
import React from 'react';

const NUM_STARS = 150;

const random = (min: number, max: number) => Math.random() * (max - min) + min;

interface Star {
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  speed: number;
}

export default function Starsfield() {
  const stars: Star[] = React.useMemo(
    () =>
      Array.from({ length: NUM_STARS }).map(() => ({
        size: random(1, 3),
        top: random(0, 100),
        left: random(0, 100),
        duration: random(3, 10),
        delay: random(0, 5),
        speed: random(5, 20),
      })),
    []
  );

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          animate={{
            y: [0, star.speed, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: 'loop',
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
