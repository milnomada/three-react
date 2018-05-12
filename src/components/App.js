import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {Scene, PerspectiveCamera, WebGLRenderer,BoxGeometry,MeshBasicMaterial, Mesh } from 'three'


var Three = {
	scene: null,
  camera: null,
  renderer: null,
  geometry: null,
  material: null,
  cube: null,

  start: () => {
    this.renderer = new WebGLRenderer();
  	this.renderer.setSize( window.innerWidth, window.innerHeight );
  	this.geometry = new BoxGeometry( 1, 1, 1 );
  	this.material = new MeshBasicMaterial( { color: 0x00ff00 } );

		this.cube = new Mesh( this.geometry, this.material );

		//document.body.appendChild( renderer.domElement );
		//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		//var cube = new THREE.Mesh( geometry, material );
    this.scene=new Scene();
		this.scene.add( this.cube );
    this.camera=new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		this.camera.position.z = 5;
		document.body.appendChild( this.renderer.domElement );
  },
  animate: () => {
		requestAnimationFrame( Three.animate );
		this.cube.rotation.x += 0.1;
		this.cube.rotation.y += 0.1;
		this.renderer.render(this.scene, this.camera);

	}
}



class App extends Component {

  static propTypes = {
  }

  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentWillMount(){
  	Three.start()
  }

  componentDidMount(){ 
  	Three.animate()
  }

  render(){
  	return(
  	<div>
  	</div>)
  }
}

export default App
