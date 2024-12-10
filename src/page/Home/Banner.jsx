import React from 'react';
import { motion } from "motion/react"
import {  easeOut } from 'motion';
import banner from '../../assets/meeting.jpg'
import banner2 from '../../assets/corporate.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img src={banner}
                    animate={{y: [20, 0, 20]}}
                    transition={{duration:10, repeat:Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-8 border-blue-500  border-b-8" />
                    <motion.img src={banner2}
                    animate={{x: [40, 100, 40]}}
                    transition={{duration:10, delay:5, repeat:Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-8 border-blue-500  border-b-8" />
                </div>
                <div className='flex-1'>
                    <motion.h1 animate={{ x:50 }}  transition={{duration:2 , delay:1 , ease: easeOut, repeat:Infinity}} className="text-5xl font-bold">Letes 
                        
                        <motion.span animate={{ color: ['#ecff33', '#33ff3f', '#86ff33', '#d11758','#d11758']}} transition={{duration:1.5, repeat:Infinity}} >Job</motion.span>
                        
                         News!</motion.h1>
                    <motion.p animate={{ x: 50 }} transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }} className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;