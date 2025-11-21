"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  github: string;
  demo?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Smart Finance Tracker",
    description:
      "A personal finance dashboard with fraud detection, analytics charts, and automated categorization.",
    github: "https://github.com/",
    demo: "#",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Chart.js"],
  },
  {
    title: "AI Chat Assistant",
    description:
      "A ChatGPT-powered AI app with document ingestion, embeddings, and interactive responses.",
    github: "https://github.com/",
    demo: "#",
    tags: ["Python", "FastAPI", "RAG", "Pinecone"],
  },
  {
    title: "Portfolio Design System",
    description:
      "A reusable component system for modern portfolio websites with animations and UI patterns.",
    github: "https://github.com/",
    tags: ["React", "TailwindCSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition-shadow"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
            
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-white/10 border border-white/10 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Link
                    href={project.github}
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                  >
                    GitHub →
                  </Link>

                  {project.demo && (
                    <Link
                      href={project.demo}
                      className="text-gray-300 hover:text-white text-sm font-medium"
                    >
                      Live Demo →
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
