import React, {Component} from 'react'
import PropTypes from 'prop-types'

import AddColorFormComponent from './AddColorFormComponent'
import ColorSummaryComponent from './ColorSummaryComponent'


class ColorOrganizerComponent extends Component{

  constructor(props){
    super(props)
    this.state = {
      colors: [
        { "id": "0", "title": "ocean at dusk", "color": "#00c4e2", "rating": 5 },
        { "id": "1", "title": "lawn", "color": "#26ac56", "rating": 3 }
      ]
    }
    this.onNewColor = this.onNewColor.bind(this)
    this.onRatingChange = this.onRatingChange.bind(this)
  }

  onNewColor(title, color){
    const newColors = [...this.state.colors, {"title":title, "color":color, "rating": 0 }]
    this.setState({
      colors: newColors
    })
  } 

  onRatingChange(title){
    return (newRating) => {
      var newColors = this.state.colors.slice()
      for (var color of newColors){
        if (color.title === title){
          color.rating = newRating
          break
        }
      }
      this.setState({
        colors: newColors
      })
    }
  }

  render(){
    return (
      <div>
        <AddColorFormComponent onNewColor={this.onNewColor}/>
        {this.state.colors.map((color, idx) => {
            color.id = idx
            return <ColorSummaryComponent color={color} onRatingChange={this.onRatingChange}/>
          })}
      </div>
    )
  }
}



export default ColorOrganizerComponent