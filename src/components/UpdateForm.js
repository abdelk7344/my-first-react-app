import React from 'react'


class UpdateForm extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <h3>Update form</h3>
                    <input id="updateText" type = "text"/>
                    <button type='button' onClick={this.props.handler}>Submit</button>

                </form>
            </div>
        )
    }


}
export default UpdateForm