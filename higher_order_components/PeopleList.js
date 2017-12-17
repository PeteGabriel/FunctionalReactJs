import React, { Component } from 'react'
import PropTypes from 'prop-types'


const PeopleList = ({results}) => {
  return (
    <ul>
    { (results.length > 0) ? 
      results.map((user, idx) => <li key={idx}>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</li>) : <p>0 results found</p>}
    </ul>
  )
}

export default PeopleList