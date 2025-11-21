"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 flex justify-center"
    >
      <div className="max-w-4xl text-center space-y-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          I'm a Full-Stack Developer & Designer with a passion for building 
          intelligent systems, modern interfaces, and smooth digital experiences. 
          I combine clean design principles with scalable engineering, creating 
          products that are both functional and visually polished.
          <br /><br />
          I enjoy working on end-to-end solutions — from wireframing and UI design, 
          to backend APIs, databases, authentication, cloud deployment, and 
          performance optimization. My goal is to craft intuitive experiences powered 
          by efficient, maintainable code.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
        >
          {[
            "React",
            "Next.js",
            "Node.js",
            "TailwindCSS",
            "TypeScript",
            "MongoDB",
            "PostgreSQL",
            "UI/UX Design",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-200 text-sm md:text-base"
            >
              {skill}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
