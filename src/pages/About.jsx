import Contact from "./Contact";
import { motion } from "framer-motion";
const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-28 pb-20 space-y-16">
      <motion.h1
        className="text-4xl md:text-4xl font-bold text-center underline underline-offset-4 decoration-white cursor-pointer hover:text-blue-500"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        About CryptoTracker
      </motion.h1>
      <motion.div
        className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-5xl mx-auto text-justify"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p>
          <strong>CryptoTracker</strong> is a sleek and responsive
          cryptocurrency tracking app that provides live market data for the top
          21 cryptocurrencies. It’s designed to offer accurate prices, easy
          navigation, and a smooth user experience — all powered by real-time
          updates.
        </p>

        <p>
          Users can easily switch between multiple currencies such as USD, EUR,
          and INR, search for specific coins, and explore detailed market
          insights. Every coin page provides a clear view of trends, market
          stats, and history — making CryptoTracker ideal for both beginners and
          traders who need reliable, fast data.
        </p>

        <p>
          With its clean interface and mobile-first design, CryptoTracker
          ensures you stay updated on the go. Whether you're exploring the
          crypto world or monitoring your portfolio, it’s your all-in-one
          solution for live crypto insights.
        </p>
      </motion.div>
      <motion.div
        className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/10 transition-all"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-400 text-center">
          Key Features
        </h2>
        <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
          {[
            "Live crypto price tracking with instant updates",
            "Interactive live graphs showing price trends",
            "Currency switcher (USD, EUR, INR)",
            "Search and filter coins in real time",
            "Detailed market stats and historical data",
            "Responsive, fast, and modern UI",
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                color: "#60A5FA",
                x: 5,
                transition: { duration: 0.3 },
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="cursor-pointer mt-16"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default About;
