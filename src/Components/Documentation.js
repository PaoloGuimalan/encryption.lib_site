import React from 'react'
import './comp_css/Documentation.css';
import {motion} from 'framer-motion';
import {Link, Route, Switch, useLocation, Redirect} from 'react-router-dom';

function Documentation() {

    const location = useLocation();

    const About_div = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>About encryption.lib</p>
            </div>
        );
    }

    const Enc = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>encrypt()</p>
            </div>
        );
    }

    const Dec = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>decrypt()</p>
            </div>
        );
    }

    const Val_param = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>Value Parameter</p>
            </div>
        );
    }

    const Count_param = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>Count Parameter</p>
            </div>
        );
    }

    const Err = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>Error Codes</p>
            </div>
        );
    }


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
                                <Link to='/documentation/ab_enclib' className='links_p'><p className='p_selection'>About encryption.lib</p></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='p_selection'>Attributes</p>
                                    <table className='under_tbl_selection'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Link to='/documentation/ab_encrypt' className='links_u'><p>encrypt()</p></Link>
                                                    <Link to='/documentation/ab_decrypt' className='links_u'><p>decrypt()</p></Link>
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
                                    <table className='under_tbl_selection'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Link to='/documentation/ab_valparam' className='links_u'><p>Value Parameter</p></Link>
                                                    <Link to='/documentation/ab_countparam' className='links_u'><p>Count Parameter</p></Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to='/documentation/ab_err' className='links_p'><p className='p_selection'>Error Codes</p></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/documentation'>
                        <Redirect to='/documentation/ab_enclib'/>
                    </Route>
                    <Route path='/documentation/ab_enclib' component={About_div}/>
                    <Route path='/documentation/ab_encrypt' component={Enc}/>
                    <Route path='/documentation/ab_decrypt' component={Dec}/>
                    <Route path='/documentation/ab_valparam' component={Val_param}/>
                    <Route path='/documentation/ab_countparam' component={Count_param}/>
                    <Route path='/documentation/ab_err' component={Err}/>
                </Switch>
            </motion.div>
        </motion.div>
    )
}

export default Documentation
