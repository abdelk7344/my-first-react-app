import React from 'react'
import NavBaby from './NavBaby'
import HomePage from './HomePage'
import TodoPage from './TodoPage'
import AboutPage from './AboutPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="appDiv">  
        <NavBaby/>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/list' exact component={TodoPage}/>
          <Route path='/about' exact component={AboutPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
