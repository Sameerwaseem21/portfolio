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

const App: React.FC = () => {
  return (
    <Router basename='/portfolio'>
      
      <div className="main">
        <nav>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">PORTFOLIO</a></li>
                <li><a href="/">SERVICES</a></li>
                <li><a href="/">HIRE ME</a></li>
            </ul>
        </nav>
        </div>
    <Switch>
      {/* Changing content comes here */}
      <Route exact path='/' component={MyFirstComponent} />
      <Route exact path='/example' component={SomeExampleComponent}/>
    </Switch>

    {/* The footer and other components you want to display on all pages come here */}
    <ClickCount />

  </Router>
    
  )
}

export default App