import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DataComponent from './DataComponent'
import PeopleList from './PeopleList'

const RandomMeUsersComposed = (count) => DataComponent(PeopleList, `https://randomuser.me/api?results=${count}`) 

export default RandomMeUsersComposed