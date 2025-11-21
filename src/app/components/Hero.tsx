'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        {/* Profile image in ring */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-indigo-500/30 mb-6">
          <Image
              src="/profile.jpeg"
              alt="Profile Photo"
              fill
              style={{
                position: "absolute",
                height: "100%", // zoomed in vertically
                width: "100%", // keep full width
                left: "10%", // horizontal offset
                top: "35%", // vertical offset
                transform: "scale(2.1)", // zoom
              }}
              className="object-contain"
              priority
            />
        </div>

        {/* Hero text */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Full-Stack Developer & Designer
        </h1>
        <p className="text-lg md:text-2xl text-indigo-200 max-w-xl">
          I build intelligent systems and beautiful interfaces.
        </p>
      </motion.div>
    </div>
  );
}
