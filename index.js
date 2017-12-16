import React, { Component } from 'react';
import { render } from 'react-dom';
import MemberList from './mounting_lifecycle/MemberList'

import './style.css';

class App extends Component {
  render() {
    return (
    <div>
     <MemberList />
    </div>);
  }
}

render(<App />, document.getElementById('root'));
