import React from 'react'
import './comp_css/Download.css';
import {motion} from 'framer-motion';

function Download() {
    return (
        <motion.div id='div_download'
        >
            <p id='label_down'>Downloads</p>
            <div id='versions'></div>
        </motion.div>
    )
}

export default Download
