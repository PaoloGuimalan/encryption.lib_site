import React from 'react'
import './comp_css/Documentation.css';
import {motion} from 'framer-motion';

function Documentation() {
    return (
        <motion.div id='div_docu'
        >
            <motion.div
                animate={{
                    opacity: 1,
                    transition:{
                        delay: 0,
                        duration: 1
                    } 
                }}
                exit={{
                    opacity: 0,
                    transition:{
                        delay: 0,
                        duration: 1
                    } 
                }}
            id='div_under_doc'>
                <div id='div_selection'>
                    <table id='tbl_selection'>
                        <tbody>
                            <tr>
                                <td>
                                    <p className='p_selection'>About encryption.lib</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='p_selection'>Attributes</p>
                                    <table className='under_tbl_selection'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>encrypt()</p><p>decrypt()</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='p_selection'>Parameters</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='p_selection'>Error Codes</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Documentation
