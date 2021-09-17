import React from 'react'
import './comp_css/Home.css';
import ParticlesHome from '../Particle';
import {motion} from 'framer-motion';

function Home() {
    return (
        <motion.div id='div_home'
            initial={{marginTop: "-100%"}}
            animate={{
                marginTop: "0%",
                transition:{
                    duration: 1.5
                }
            }}
            exit={{
                marginTop: "-100%",
                transition:{
                    duration: 1.5
                }
            }}
        >
            <ParticlesHome />
            <div id='handler'>
                <p id='main_label'>encryption.lib</p>
            </div>
        </motion.div>
    )
}

export default Home
