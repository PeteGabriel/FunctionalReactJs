import React, {Component } from 'react';
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'

class CountryListComponent extends Component{

  constructor(props){
    super(props)
    this.state = {
      countryNames: [],
      loading: false
    }
  }

  componentDidMount(){
    this.setState({loading:true}) //do not cause an update. following calls will
    fetch('https://restcountries.eu/rest/v1/all')
      .then(response => response.json())
      .then(json => json.map(country => country.name))
      .then(countryNames => this.setState({countryNames, loading: false}))
  }

  render(){
    const {countryNames, loading} = this.state
    return (
      <div>
        {
          (loading) ? <p>Loading country names...</p> :
            (countryNames.length > 0) ? 
            <div><ul>{countryNames.map((c,i) => <li key={i}>{c}</li>)}</ul></div> :
              <p>0 country names found !</p>
        }
      </div>
    )
  }
}


export default CountryListComponent