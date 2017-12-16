import React, {Component} from 'react'
import PropTypes from 'prop-types'

const StarRatingComponent= ({rating=0, onRatingChange, totalStars=5}) => 
  <div>
    {Array.from(new Array(totalStars), (n, i) =>
      <Star key={i} selected={i<rating} onClick={() => onRatingChange(i+1)}/> )}  
      <br/>
    <p>{rating} of {totalStars} stars</p>
  </div>


const Star = ({selected=false, onClick=f=>f}) => 
  <div className={(selected) ? 'selected' : 'star'} onClick={onClick}>
  </div>


Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

export default StarRatingComponent
