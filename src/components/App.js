import React from 'react'
import NavBaby from './NavBaby'
import Title from './Title'
import Ingred from './Ingred'
import Recipe from './Recipe'

function App() {
  return (
    <div className="Home">  
      <NavBaby/>
      <Title/>
      <div id="list">
        <Ingred/>
        <Recipe/>
      </div>
    </div>
  );
}

export default App;
