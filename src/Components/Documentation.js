import React from 'react'
import './comp_css/Documentation.css';
import {motion} from 'framer-motion';

function Documentation() {
    return (
        <motion.div id='div_docu'
            animate={{
                top: "0%",
                transition:{
                    duration: 1
                } 
            }}
            exit={{
                top: "100%",
                transition:{
                    duration: 1
                } 
            }}
        >
            <p id='label_docu'>Hello Docu</p>
        </motion.div>
    )
}

export default Documentation
