import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/hp2.png';
import { motion } from "framer-motion";
// const container = (delay) => ({
//     hidden: { x: -100, opacity: 0 },
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: { duration: 0.5, delay: delay }
//     }
// })



const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Haraprasad Tripathy</motion.h1>
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.75 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.1 }}
                            drag="x"
                            dragConstraints={{ left: -100, right: 100 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Node.js / React Developer</motion.span>
                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center">
                        <img
                            className="rounded-2xl" src={profilePic} alt="Profile_pic" />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Hero