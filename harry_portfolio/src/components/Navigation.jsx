
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const btnLists = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500", "#915eff",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500", "#915eff", "#000", "#b91c1c", "#db2777", "#7e22ce", "#84cc16", "#c2410c"];
  const angleIncrement = 360 / btnLists.length;
  return (<>
    <motion.div
      varients={fadeIn('up', 'spring', 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className="flex justify-end items-end relative hover:pause animate-spin-slow"
    >
      {btnLists.map((btn, index) => {
        const angleRad = (index * angleIncrement * Math.PI) / 90;
        const radius =
          "calc(20vw - 5rem)";
        const x = `calc(${radius}*${Math.cos(angleRad)})`;
        const y = `calc(${radius}*${Math.sin(angleRad)})`;

        return <div
          className="z-50"
          style={{ transform: `translate(${x}, ${y})` }}
        >
          <span className="rounded-full flex items-right justify-right custom-bg">
            <span className="relative lg:w-1 lg:h-1  animate-spin-slow-reverse group-hover:pause hover:text-accent">
              <div className={`w-3 h-3 rounded-full bg-[${btn}] ${btn}`} />
            </span>
          </span>
        </div>;
      })}
    </motion.div>
  </>
  );
};

export default Navigation;
