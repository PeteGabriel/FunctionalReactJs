import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'


const DataComponent = (ComposedComponent, uri) =>
  class DataComponent extends Component{
    
    constructor(props){
      super(props)
      this.state={
       loading:false,
       results: [],
       error: null
      }
    }

    componentWillMount(){
      this.setState({loading:true})
      fetch(uri)
        .then((response) =>{
          if (response.status == 200){
            return response.json()
          }else throw new Error("Bad response from server")
        })
        .then(json => json.results)
        .then(results => this.setState({results, loading:false}))
        .catch(error => this.setState({loading:false, error}))
    }

    render(){
      const {loading, results, error} = this.state
      return (
        <div>
          {
            (loading) ? <p>Loading random users...</p> :
              (error) ? <p>{error.message}</p> : <ComposedComponent {...this.state}/>
          }
        </div>
      )
    }
  }

export default DataComponent