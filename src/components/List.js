import React from 'react'

export class List extends React.Component{
    constructor(){
        super()
        this.state={list:[],id:0}
        this.onSubmit=this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
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

    onDelete(deleteditem){


        this.setState(prevState=>{


            let updatedArray = prevState.list.filter(function(curritem){
                return curritem.idVal !== deleteditem.idVal

            }
            )

            return(
                {list: updatedArray}
            )
        }
            
            )

    }




    render(){
        console.log(this.state.list)


        // let liArray = this.state.list.map(
        //     (item)=><li>{item.stringVal} <a onClick = {()=>this.onDelete(item)} >delete Button</a> </li>
        // )
        
        return (
        <div>
            <h1>Your To Do List:</h1>
            <input type="text" id="input" name="input"/>
            <input type="submit" value="Submit" onClick={this.onSubmit}/>
            <ul>
                {this.state.list.map(
            (item)=><li>{item.stringVal} <a onClick = {()=>this.onDelete(item)} >Delete</a> </li>
        )} 
            </ul>
        </div>)
    }


}

export default List