import React from 'react'
import UpdateForm from './UpdateForm'
import firebase from '../Firebase'

export class List extends React.Component{
    constructor(){
        super()
        this.state={list:[],id:0,showUpdateForm:false,currUpdate:{}}
        this.onSubmit=this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onUpdate= this.onUpdate.bind(this)
        this.childHandler = this.childHandler.bind(this)
    }
    componentDidMount(){
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let cleanArr=[]
            let maxId=0
            for(let item in items){
                if(items[item].id>maxId){
                    maxId=items[item].id
                }
                cleanArr.push(
                    {
                        keyVal:item,
                        idVal:items[item].id,
                        stringVal:items[item].name
                    }
                )
            }
            this.setState({list:cleanArr,id:maxId})
                

        }
        )
    }
    onSubmit(){
        const itemRef= firebase.database().ref('items')
        this.setState(prevState=>{
            const stringVal= document.getElementById('input').value;
            const idVal= prevState.id+1;
            itemRef.push({name:stringVal,id:idVal})
            return{
                id: idVal,
                list: prevState.list.concat({stringVal,idVal})

            }


        })
    }

    onDelete(deleteditem){
        const itemRef = firebase.database().ref(`/items/${deleteditem}`);
        itemRef.remove();
        this.setState({showUpdateForm:false})

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
        firebase.database().ref(`/items/${this.state.currUpdate.keyVal}`).set({
            name:document.getElementById('updateText').value,
            id:this.state.currUpdate.idVal
        });
        this.setState({showUpdateForm:false})
    }




    render(){
        console.log(this.state.list)
        return (
            <div >
                <h1>Your To Do List:</h1>
                <input type="text" id="input" name="input"/>
                <button onClick={this.onSubmit}>Submit</button>
                <ul className="centeredList">
                    {this.state.list.map((item)=>
                        <li key={item.idVal}>{item.stringVal} <a style={{color:"red",fontWeight: "bold"}} onClick = {()=>this.onDelete(item.keyVal)}>Delete</a> <a style={{color:"blue",fontWeight: "bold"}} onClick={()=>this.onUpdate(item)}>Update</a></li>
                    )} 
                </ul>
                {this.state.showUpdateForm&&<UpdateForm handler={this.childHandler} name = {this.state.currUpdate.stringVal}/>}
            </div>
        )

    }


}

export default List