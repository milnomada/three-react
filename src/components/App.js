import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Three from './Three'


class App extends Component {

  static propTypes = {}

  constructor(props, context) {
    super(props)
    this.state = {
    	three: new Three()
    }
  }

  componentWillMount(){
  	this.state.three.start()
  }

  componentDidMount(){ 
  	this.state.three.animate()
  }

  render(){
  	return(<div></div>)
  }
}

export default App
