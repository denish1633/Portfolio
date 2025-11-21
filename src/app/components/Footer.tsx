import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-12 px-6 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Name */}
        <h3 className="text-xl font-semibold text-white">
          © {new Date().getFullYear()} Denish Shingala
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 mt-2">
          Building Intelligent Systems & Beautiful Interfaces
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-white transition"
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
