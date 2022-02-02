import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/clickCount';
import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Main from './components/page/main/main';
import Portfolio from './components/page/portfolio/portfolio';
import About from './components/page/about/about';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Router basename='/portfolio'>
        <Navbar />
    
        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/main' component={ Main} />
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/about' component={About}/>
        </Switch>

        {/* The footer and other components you want to display on all pages come here */}
        {/* <ClickCo  unt /> */}

      </Router>
    </div>
    
  )
}

export default App