import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0A0A0A] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12"
        >
          Have a project in mind or want to collaborate?  
          Drop a message — I respond quickly.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl p-3 text-gray-100 focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl p-3 text-gray-100 focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

      

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-xl font-medium"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
