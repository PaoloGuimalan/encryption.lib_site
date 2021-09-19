import './App.css';
import {Link, Route, Switch, useLocation, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import Documentation from './Components/Documentation';
import Download from './Components/Download';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, useEffect} from 'react';

function App() {

  const location = useLocation();

  const [ambient, setambient] = useState(false);

  return (
    <div className="App">
      <motion.header id='header'
        animate={{
          background: ambient == false ? "transparent" : "black",
          transition:{
            duration: 2
          }
        }}
      >
        <ul>
          <li id='li_label'>
            <motion.p
              animate={{
                opacity: ambient == false ? "0" : "1",
                transition:{
                  delay: ambient == false ? 0 : 1,
                  duration: 2
                }
              }} 
            id='label_header_title'>encryption.lib</motion.p>
          </li>
          <li id='li_tbl'>
            <table id='tbl_header'>
              <tbody>
                <tr>
                  <td>
                    <p className='links' onClick={() => {setTimeout(function(){setambient(false)}, 500); window.scrollTo(0, 0)}}>Home</p>
                  </td>
                  <td>
                    <p className='links' onClick={() => {setambient(true); window.scrollTo(0, 700)}}>Documentation</p>
                  </td>
                  <td>
                    <p className='links' onClick={() => {setambient(true)}}>Download</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </motion.header>
      <Home />
      <Documentation />
      <Download />
    </div>
  );
}

export default App;
