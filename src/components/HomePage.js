import React from 'react'
import Title from './HomeComponents/Title'
import Ingred from './HomeComponents/Ingred'
import Recipe from './HomeComponents/Recipe'

class HomePage extends React.Component{


    render(){
        return(
            <div>
                <Title/>
                <Ingred/>
                <Recipe/>
            </div>
        )
    }



}

export default HomePage