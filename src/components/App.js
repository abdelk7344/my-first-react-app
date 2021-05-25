import React from 'react'
import NavBaby from './NavBaby'
import Title from './Title'
import Ingred from './Ingred'
import Recipe from './Recipe'
import List from './List'

function App() {
  return (
    <div className="Home">  
      <NavBaby/>
      <Title/>
      <div id="list">
        <Ingred/>
        <Recipe/>
      </div>
      <List />
    </div>
  );
}

export default App;
