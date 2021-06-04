import React from 'react'


class UpdateForm extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <h3>Update form</h3>
                    <input type = "text"/>
                    <button onClick={this.props.handler}>Submit</button>

                </form>
            </div>
        )
    }


}
export default UpdateForm