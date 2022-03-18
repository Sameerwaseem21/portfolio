import React from 'react'
import styles from './App.module.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Main from './components/page/main/main'
import Portfolio from './components/page/portfolio/portfolio';
import Projects from './components/page/projects/projects';


const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Navbar />
    
        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/' component={Main} />
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/projects' component={Projects} />
          
        </Switch>

        {/* The footer and other components you want to display on all pages come here */}
        {/* <ClickCo  unt /> */}

      </Router>
    </div>
    
  )
}

export default App