import React, {Component} from 'react'
import PropTypes from 'prop-types'

/*
The StarRating component requires two critical pieces of data: the total number of stars to display, and the rating (the number of stars to highlight).

class StarRatingComponent extends Component{

  static defaultProps = {
    totalStars : 5
  }

  constructor(props){
    super(props)
    this.change = this.change.bind(this)
  }

  change(starsSelected){
    this.props.onRatingChange(starsSelected)
  }

  render(){
    const totalStars = this.props.totalStars
    const starsSelected = this.props.rating

    return (
      <div>
        {Array.from(new Array(totalStars), (n, i) =>
          <Star key={i} selected={i<starsSelected} onClick={() => this.change(i+1)}/> )}  
        <br/>
        <p>{starsSelected} of {totalStars} stars</p>
      </div>
    )
  }

}

StarRatingComponent.propTypes = {
  totalStars : PropTypes.number
}
*/
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