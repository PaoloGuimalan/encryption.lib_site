import React from 'react'
import './comp_css/Download.css';
import {motion} from 'framer-motion';

function Download() {
    return (
        <motion.div id='div_download'
        >
            <p id='label_down'>Downloads</p>
            <motion.div
                whileHover={{
                   scale: 1.04,
                   borderRadius: "5px"
                }}
             id='versions'>
                 <table className="tbl_v">
                     <tbody>
                         <tr>
                             <td>
                                <ul className='ul_v'>
                                    <li>
                                        <p className='v_label'>Version 0.0.1</p>
                                    </li>
                                    <li>
                                        <p className='v_label_p'>Contains basic encryption of characters into numbers only. 
                                        Version also includes multiple encryption levels maximum of 5.
                                        </p>
                                    </li>
                                    <li id='li_v_third'>
                                        <motion.button
                                            whileHover={{
                                                background: "white",
                                                color: "black"
                                            }}
                                         className='btns_v'>Download</motion.button>
                                    </li>
                                </ul>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </motion.div>
        </motion.div>
    )
}

export default Download
