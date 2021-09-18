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
                    <Link to='/' className='links' onClick={() => {setTimeout(function(){setambient(false)}, 2000)}}>Home</Link>
                  </td>
                  <td>
                    <Link to='/documentation' className='links' onClick={() => {setambient(true)}}>Documentation</Link>
                  </td>
                  <td>
                    <Link to='/download' className='links' onClick={() => {setambient(true)}}>Download</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </motion.header>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
            <Redirect to={`/home`} />
        </Route>
        <Route path={`/home`} component={Home}/>
        <Route path='/documentation' component={Documentation}/>
        <Route path='/download' component={Download}/>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
