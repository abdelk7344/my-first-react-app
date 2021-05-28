import React from 'react'

export class List extends React.Component{
    constructor(){
        super()
        this.state={list:[],id:0}
        this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit(){
        this.setState(prevState=>{
            const stringVal= document.getElementById('input').value;
            const idVal= prevState.id+1;
            return{
                id: idVal,
                list: prevState.list.concat({stringVal,idVal})
            }

        })
    }


    render(){
        console.log(this.state.list)
        return (
        <div>
            <h1>Your To Do List:</h1>
            <input type="text" id="input" name="input"/>
            <input type="submit" value="Submit" onClick={this.onSubmit}/>
            <ul>
            </ul>
        </div>)
    }


}

export default List