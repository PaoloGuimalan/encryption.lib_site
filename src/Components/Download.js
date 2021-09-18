import React from 'react'
import './comp_css/Download.css';
import {motion} from 'framer-motion';

function Download() {
    return (
        <motion.div id='div_download'
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
        >
            <p id='label_docu'>Hello Download</p>
        </motion.div>
    )
}

export default Download
