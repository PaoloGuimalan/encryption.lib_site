import './App.css';
import {Link, Route, Switch, useLocation} from 'react-router-dom';
import Home from './Components/Home';
import Documentation from './Components/Documentation';
import Download from './Components/Download';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

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
      </motion.header>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact component={Home}/>
        <Route path='/documentation' component={Documentation}/>
        <Route path='/download' component={Download}/>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
