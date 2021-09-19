import React from 'react'
import './comp_css/Home.css';
import ParticlesHome from '../Particle';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

function Home() {
    return (
        <motion.div id='div_home'
        >
            <ParticlesHome />
            <div id='handler'>
                <motion.p
                    animate={{
                        opacity: 1,
                        transition:{
                            delay: 1,
                            duration: 1
                        }
                    }}
                    exit={{
                        opacity: 0
                    }}
                 id='main_label'>encryption.lib</motion.p>
            </div>
        </motion.div>
    )
}

export default Home
