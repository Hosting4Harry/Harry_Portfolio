import React from 'react';
import { motion } from 'framer-motion';
import WizardCanvas from './canvas/Wizard';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import Navigation from './Navigation';

function Avatar() {
    return (
        <div className='xl:flex-row flex-col-reverse flex gap-5 overflow-hidden'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                <p className='text-white font-black text-[36px] pb-1'>" The Tale of Mystic</p>
                <h3 className={`${styles.sectionSubText} text-[22px] font-bold text-center`}>Greetings from the mighty tech wizard.</h3>
                <h4 className='text-white-100 text-[14px] pl-4 pt-1 '>
                    I am here to tell you the story of a great developer who started his journey as a Jr. Software Developer (in Node and React) at Evince Development and paved his way through a lot of challenges as a fresher with little knowledge of any technology, but determined to learn. As he worked through different obstacles, he experienced the taste of backend development, which he enjoyed the most. Then, he began his journey with Angular development but focused more on Node JS and React. But then, a black cloud hit him; he had to work with a new unknown technology called SvelteKit. But, you know, he is a brave warrior, so without any hesitation, he jumped into the battle with SSR technology on SvelteKit and won with great pride.
                    <div className='flex justify-end items-center pt-2'>
                        <span className=' green-text-gradient font-bold'>
                            This is the the story of our brave warrior &nbsp;</span>
                        <span className='pink-text-gradient font-bold'>@Harprasad</span>
                    </div>
                </h4>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='xl:flex-1 w-full h-[500px]'>
                <Navigation />
                <WizardCanvas />

            </motion.div>
        </div>
    )
}

export default SectionWrapper(Avatar, "")