import React, {Component} from 'react'
import PropTypes from 'prop-types'

import StarRatingComponent from './StarRatingComponent'

function ColorSummaryComponent(props){
  return (
    <div style = {
        {
          width: '150px', 
          height: '160px',
          marginBottom: '10px',
          marginTop: '10px',
          borderStyle: 'solid', 
          borderWidth: '1px'
        }
      }>
      <p>{props.color.title}</p>
      <div style={{width: '150px', height: '50px', backgroundColor: props.color.color}}></div>
      <StarRatingComponent 
        rating={props.color.rating} 
        onRatingChange={props.onRatingChange(props.color.title)}/>
    </div>
  )
}

ColorSummaryComponent.propTypes = {
  color: (props, propName) => {
    var color =  props[propName]
    if (typeof color !== 'object' ) {
      return new Error('Color parameter must be a valid object.')
    }

    if (typeof color.title !== 'string' ) {
      return new Error("Property 'title' must be a valid string.")
    }
    
    if (typeof color.color !== 'string' ) {
      return new Error("Property 'color' must be a valid string.")
    }

    if (typeof color.rating !== 'number' ) {
      return new Error("Property 'rating' must be a valid number.")
    }

    return null
  },

  onRatingChange : PropTypes.func.isRequired
}

export default ColorSummaryComponent