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
                {list: updatedArray,
                showUpdateForm:false}
            )
        }
            
            )

    }

    onUpdate(updateItem){
        this.setState(prevState=>{
            if(prevState.currUpdate.stringVal!==updateItem.stringVal&&prevState.currUpdate.idVal!==updateItem.idVal&&this.state.showUpdateForm){
                return {  
                    currUpdate:updateItem
                }
            }
            return {  
                showUpdateForm: !prevState.showUpdateForm,
                currUpdate:updateItem

            }
        
        })
    }
    childHandler(){
        this.setState(prevState=>{
            let newUpdatedArr= this.state.list.map((item)=>{
                if(item.stringVal===this.state.currUpdate.stringVal&&item.idVal===this.state.currUpdate.idVal){
                    console.log(true)
                    const s= document.getElementById('updateText').value;
                    const i= item.idVal;
                    return {stringVal: s,idVal: i}
                }
                return item
            }
            )
            return{
                list:newUpdatedArr
            }
        })
    }




    render(){
        return (
            <div >
                <h1>Your To Do List:</h1>
                <input type="text" id="input" name="input"/>
                <button onClick={this.onSubmit}>Submit</button>
                <ul className="centeredList">
                    {this.state.list.map((item)=>
                        <li key={item.idVal}>{item.stringVal} <a style={{color:"red",fontWeight: "bold"}} onClick = {()=>this.onDelete(item)}>Delete</a> <a style={{color:"blue",fontWeight: "bold"}} onClick={()=>this.onUpdate(item)}>Update</a></li>
                    )} 
                </ul>
                {this.state.showUpdateForm&&<UpdateForm handler={this.childHandler} name = {this.state.currUpdate.stringVal}/>}
            </div>
        )

    }


}

export default List