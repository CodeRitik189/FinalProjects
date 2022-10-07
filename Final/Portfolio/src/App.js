import React, { Component } from 'react'
import Text from './Text';
import Navbar from './Navbar'
export default class App  extends Component {
  constructor(props){
    super(props);
    this.state = {
      width:window.innerWidth
    }
  }
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({width:window.innerWidth});
    });
  }
  render() {
    return (
      <div>
        <Navbar width = {this.state.width}/>
        <Text width = {this.state.width}/>
      </div>
    )
  }
}

