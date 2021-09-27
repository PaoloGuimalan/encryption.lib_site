import React from 'react'
import './comp_css/Download.css';
import {motion} from 'framer-motion';

function Download() {
    return (
        <motion.div id='div_download'
        >
            <motion.p 
                animate={{
                    fontSize: window.innerWidth < 768 ? "20px" : "35px"
                }}
            id='label_down'>Downloads</motion.p>
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
                                                boxShadow: "0px 0px 10px white"
                                            }}
                                         className='btns_v'><a className='btns_v_a' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/coderslibrary-d2244.appspot.com/o/encryption.lib_versions%2Fencryption.lib.rar?alt=media&token=4dceb7cb-5f3c-4543-a96f-fdc1aafc4d64">Download</a></motion.button>
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
