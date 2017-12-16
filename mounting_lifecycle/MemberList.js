import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Member from './Member'

class MemberList extends Component{

  constructor(props){
    super(props)
    this.state = {
      members: [],
      isLoading: true,
      error: null
    }
  }
  
  componentWillMount(){
    this._getFakeMembers(10)
      .then(
        members => this.setState({members, isLoading : false}),
        error => this.setState({error, isLoading : false})
      )
  }

  componenWillUpdate(){
    console.log('updating lifecycle')
  }

  _getFakeMembers(count){
    return new Promise((resolves, rejects) => {
      const api = `https://api.randomuser.me/?nat=US&results=${count}`
      const request = new XMLHttpRequest()
      request.open('GET', api)
      request.onload = () => (request.status == 200) ?
        resolves(JSON.parse(request.response).results) :
          reject(Error(request.statusText))
      request.onerror = err => rejects(err)
      request.send()
    })
  }

  render(){
    const {members, isLoading, error} = this.state
    return (
      <div>
        { (isLoading) ? <p>Loading Members...</p> :
           (members) ? members.map(member => <Member {...member}/>) :
              <p>0 members found !</p> 
        }
       
        {(error) ? <p>Error Loading Members: error</p> : ""}
      </div>
    )
  }


}


export default MemberList