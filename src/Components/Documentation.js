import React from 'react'
import {useState} from 'react';
import './comp_css/Documentation.css';
import {motion} from 'framer-motion';
import Cr_dec from './master_ins/create_dec.PNG';
import Cr_enc from './master_ins/create_enc.PNG';
import Cr_dec2 from './master_ins/create_dec2.PNG';
import Cr_enc2 from './master_ins/create_enc2.PNG';
import im_pro from './master_ins/import_process.PNG';
import init_btns from './master_ins/init_btns.PNG';
import res_ins from './master_ins/res_ins.PNG';
import con from './master_ins/enc_demo/condition.PNG';
import con_res from './master_ins/enc_demo/condition_res.PNG';
import loops from './master_ins/enc_demo/loops.PNG';
import loops_res from './master_ins/enc_demo/loop_res.PNG';
import dec_con from './master_ins/enc_demo/dec_con.PNG';
import dec_con_res from './master_ins/enc_demo/dec_con_res.PNG';
import params from './master_ins/enc_demo/params.PNG';
import {Link, Route, Switch, useLocation, Redirect} from 'react-router-dom';

function Documentation() {

    const location = useLocation();

    const [err, seterr] = useState(0);

    const About_div = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>About encryption.lib</p>
                <p className='parags'>
                    <b>Version 0.0.1</b>
                    <br />
                    <br />
                        This is version only consist of numerical encryption where characters are converted into Series of numbers
                        where the result of the encrypted value can also be encrypted as well, maximum of 5 times. As it is being converted
                         it becomes strongly secured but consumes higher space of data for because the more you encyrpt the encrypted 
                         value it becomes more longer and longer.
                </p>
                <p className='parags'>
                    <b>Version 0.0.2</b>
                    <br />
                    <br />
                        Coming Soon!
                </p>
            </div>
        );
    }

    const Directions = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>Instructions</p>
                <p className='parags'>
                    This applies in any version:
                </p>
                <br />
                <table className='tbl_ins'>
                    <tbody>
                        <tr>
                            <td>
                                <p className='parags_ins'>First step is by importing the library into your html file, the same as how 
                                you normaly import your JavaScript files.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={im_pro} className='img_ins'></img>
                            </td>
                        </tr>
                        <tr className='tr_ins'>
                            <td>
                                <p className='parags_ins'>
                                Next Step is creating script functions inside your html file 
                                and initialize <b>encrypt(the variable you want to encrypt, and how many levels of encryption) </b>
                                 or/and <b>decrypt(the variable you want to decrypt, and how many levels of decryption)</b>.
                                 <br />
                                 <br />
                                 <b>Note:</b> More instructions are in the Attributes Section.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'><b>Encryption:</b></p>
                                <img src={Cr_enc} className='img_ins'></img>
                                <p className='parags_ins'>Or</p>
                                <img src={Cr_enc2} className='img_ins'></img>
                                <p className='parags_ins'><b>Decryption:</b></p>
                                <img src={Cr_dec} className='img_ins'></img>
                                <p className='parags_ins'>Or</p>
                                <img src={Cr_dec2} className='img_ins'></img>
                            </td>
                        </tr>
                        <tr className='tr_ins'>
                            <td>
                            <p className='parags_ins'>
                                Last but Optional. Declare a function calling button to 
                                return and print the encryption/decryption results on your 
                                interface.
                            </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={init_btns} className='img_ins'></img>
                            </td>
                        </tr>
                        <tr className='tr_ins'>
                            <td>
                            <p className='parags_ins'>
                                Once you clicked the buttons, the value initialized will be 
                                encrypted or decrypted.
                            </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={res_ins} className='img_ins'></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    const Enc = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>encrypt()</p>
                <p className='parags'>
                    The encrypt attribute consist of two Parameters - the Value Parameter and Count Parameter. 
                    You can use encrypt in many different ways such as in Loops, Condition statements or even 
                    in the simpliest type of variable declaration.
                    <br />
                    <br />
                    These are the few examples of how you can use <b>encrypt()</b> attribute.
                </p>
                <br />
                <table className='tbl_ins'>
                    <tbody>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    <b>Conditional Statement (ex. If else Statement)</b>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    Code:
                                </p>
                                <img src={con} className='img_ins'></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    Result:
                                </p>
                                <img src={con_res} className='img_ins'></img>
                                <br />
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    <b>Loops (ex. For Loops)</b>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    Code:
                                </p>
                                <img src={loops} className='img_ins'></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    Result:
                                </p>
                                <img src={loops_res} className='img_ins'></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    const Dec = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>decrypt()</p>
                <p className='parags'>
                    The decrypt attribute also similar to encrypt, it also has Value and Count Parameters, 
                    but in this part you can use encrypt and decrypt to work together to perform conditional 
                    statements, loops and other procedures you can think of. By using encrypt and decrypt you 
                    can level up the security of your system from data intercepters on your API's. This does not 
                    protect your data, in basic terms, hackers can most likely still fetch the data being sent to 
                    the client and server sides but through encryption.lib the data will become unreadable in their 
                    end.
                    <br />
                    <br />
                    These are the few examples of how you can use <b>decrypt()</b> attribute.
                </p>
                <table className='tbl_ins'>
                    <tbody>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    <b>Conditional Statement (ex. If else Statement)</b>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    Code:
                                </p>
                                <img src={dec_con} className='img_ins'></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='parags_ins'>
                                    Result:
                                </p>
                                <img src={dec_con_res} className='img_ins'></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    const Val_param = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>Value Parameter</p>
                <p className='parags'>
                    Value Parameter is the one that holds the data to be encrypted or decrypted. 
                    You can initialize different ways of filling up Value Parameter as long as the 
                    value or variables are not null. The values can either be Integers, Strings or Boolean.
                </p>
                <br />
                <br />
                <table className='tbl_ins'>
                    <tbody>
                        <tr>
                            <td>
                                <img src={params} className='img_ins'></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    const Count_param = () => {
        return(
            <div className='div_under_comp'>
                <p className='label_u_comp'>Count Parameter</p>
                <p className='parags'></p>
            </div>
        );
    }

    const Err = () => {
        if(err == 11){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E000x001</p>
                </div>
            );
        }
        else if(err == 12){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E000x002</p>
                </div>
            );
        }
        else if(err == 13){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E000x003</p>
                </div>
            );
        }
        else if(err == 14){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E000x004</p>
                </div>
            );
        }
        else if(err == 21){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E001x001</p>
                </div>
            );
        }
        else if(err == 22){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E001x002</p>
                </div>
            );
        }
        else if(err == 23){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E001x003</p>
                </div>
            );
        }
        else if(err == 24){
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>E001x004</p>
                </div>
            );
        }
        else{
            return(
                <div className='div_under_comp'>
                    <p className='label_u_comp'>Error Codes</p>
                </div>
            );
        }
    }


    return (
        <motion.div id='div_docu'
        >
            <motion.p 
                animate={{
                    fontSize: window.innerWidth < 768 ? "20px" : "35px"
                }}
            id='main_label_undoc'>What is encryption.lib?</motion.p>
            <p className='parags'>
                <b>encryption.lib</b> is a JavaScript Library made for encrypting and decrypting data in your project.
                 This is developed to provide some additional security and privacy feature in your on going projects. This can be used in
                  sending encrypted data from client to server sides to prevent hackers of reading the data you are processing.
                  </p>

                  <p className='parags' id='end'>This Library can also be used in any Web based projects. It can be used both in Client and Server side of your project.
                   encryption.lib has levels of encryption to prevent the encrypted data of being decrypted immediately.
                </p>
            <motion.p 
                animate={{
                    fontSize: window.innerWidth < 768 ? "25px" : "35px"
                }}
            id='main_label_undoc'>Documentation</motion.p>
            <motion.div
            id='div_under_doc'>
                    <table id='tbl_whole'>
                        <tbody>
                            <tr>
                                <td style={{width: "15%", background: "black", paddingBottom: "500px"}}>
                                    <div id='div_selection'>
                                    <table id='tbl_selection'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                <Link to='/' className='links_p'><p className='p_selection'>About encryption.lib</p></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Link to='/drct' className='links_p'><p className='p_selection'>How to use encryption.lib</p></Link>
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
                                                    <p className='p_selection'>Error Codes</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table className='under_tbl_selection'>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(11)}}><p>E000x001</p></Link>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(12)}}><p>E000x002</p></Link>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(13)}}><p>E000x003</p></Link>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(14)}}><p>E000x004</p></Link>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(21)}}><p>E001x001</p></Link>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(22)}}><p>E001x002</p></Link>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(23)}}><p>E001x003</p></Link>
                                                                    <Link to='/documentation/ab_err' className='links_u' onClick={() => {seterr(24)}}><p>E001x004</p></Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </td>
                                <td style={{width: "40%"}}>
                                    <Switch location={location} key={location.pathname}>
                                        <Route path='/' exact component={About_div}/>
                                        <Route path='/drct' exact component={Directions}/>
                                        <Route path='/documentation/ab_encrypt' component={Enc}/>
                                        <Route path='/documentation/ab_decrypt' component={Dec}/>
                                        <Route path='/documentation/ab_valparam' component={Val_param}/>
                                        <Route path='/documentation/ab_countparam' component={Count_param}/>
                                        <Route path='/documentation/ab_err' component={Err}/>
                                    </Switch>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </motion.div>
        </motion.div>
    )
}

export default Documentation
