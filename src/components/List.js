import React from 'react'

export class List extends React.Component{
    constructor(){
        super()
        this.state={list:[]}
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(){
        this.setState(preveState=>{
            return {
                list: preveState.list.concat(document.getElementById('input').value)
            }
        })
        
    }

    render(){
        console.log(this.state.list)
        const listLi= this.state.list.map((item) =>
            <li>{item}</li>//putting the component for add and delete links
        )
        return (
        <div>
            <h1>Your To Do List:</h1>
            <input type="text" id="input" name="input"/>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
            <ul>
                {listLi}
            </ul>
        </div>)
    }


}

export default List