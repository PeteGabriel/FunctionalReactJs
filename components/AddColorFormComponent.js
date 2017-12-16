import React, { Component } from 'react';
import PropTypes from 'prop-types'

/*The AddColorForm component renders an HTML form
  that contains three elements:
  a text input for the title, 
  a color input for the color’s hex value and a button to submit the form.
*/
class AddColorFormComponent extends Component{
  
  static defaultProps = {
    onNewColor : (title, color) => alert(`New color: ${title}-${color}`)
  }

  constructor(props){
    super(props)
    this._submit = this._submit.bind(this)
  }

  //handle onSubmit event
  _submit(e){
    e.preventDefault()
    const {title, color} = this.refs
    this.props.onNewColor(title.value, color.value)
    //reset values for new colors
    title.value = ""
    color.value = "#000000"
    title.focus()
  }

  render(){
    return (
      <form onSubmit={this._submit}>
        <input ref="title" type="text" placeholder="color title..." required/>
        <input ref="color" type="color" required/>
        <button>Add</button>
      </form>
    )
  }

}

AddColorFormComponent.propTypes = {
  onNewColor : PropTypes.func
}

export default AddColorFormComponent