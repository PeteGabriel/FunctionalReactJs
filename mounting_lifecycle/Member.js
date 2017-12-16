import React, { Component } from 'react';
import PropTypes from 'prop-types'


const Member = ({ email, picture, name, location }) => {
  return (
    <div style={{
          width: '300px', 
          height: '180px',
          marginBottom: '3px',
          marginTop: '10px',
          borderStyle: 'solid', 
          borderWidth: '1px'
    }}>
      <img src={picture.thumbnail} alt=""/>
      <h3>{name.first} {name.last}</h3>
      <p>{email}</p>
      <p>{location.city}, {location.state}</p>
    </div>
  )
}

export default Member