import React from 'react'
import UpdateForm from './UpdateForm'

export class List extends React.Component{
    constructor(){
        super()
        this.state={list:[],id:0,showUpdateForm:false,currUpdate:{}}
        this.onSubmit=this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onUpdate= this.onUpdate.bind(this)
        this.childHandler = this.childHandler.bind(this)
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

    onUpdate(updateItem){
        this.setState(prevState=>{
            return {  
                showUpdateForm: !prevState.showUpdateForm,
                currUpdate:updateItem
            }
        
        })
    }
    childHandler(){
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
            <button onClick={this.onSubmit}>Submit</button>
            <ul>
                {this.state.list.map(
            (item)=><li>{item.stringVal} <a onClick = {()=>this.onDelete(item)}>Delete</a> <a onClick={()=>this.onUpdate(item)}>Update</a></li>
        )} 
            </ul>

            {this.state.showUpdateForm&&<UpdateForm handler={()=>this.childHandler}/>}

        </div>)
    }


}

export default List