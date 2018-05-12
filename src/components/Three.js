'use strict';

import {Scene, PerspectiveCamera, WebGLRenderer,BoxGeometry,MeshBasicMaterial, Mesh } from 'three'

class Three {

	constructor(width, height) {
		this.sceneWidth= width || window.innerWidth;
		this.sceneHeight= height || window.innerHeight;
		this.scene= null;
	  this.camera= null;
	  this.renderer= null;
	  this.geometry= null;
	  this.material= null;
	  this.cube= null;
	  this.animate = this.animate.bind(this);
	}	

  start () {
    this.renderer = new WebGLRenderer();
  	this.renderer.setSize( this.sceneWidth, this.sceneHeight );
  	this.geometry = new BoxGeometry( 1, 1, 1 );
  	this.material = new MeshBasicMaterial( { color: 0x00ff00 } );
		this.cube = new Mesh( this.geometry, this.material );

    this.scene=new Scene();
		this.scene.add( this.cube );
    this.camera=new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		this.camera.position.z = 5;
		document.body.appendChild( this.renderer.domElement );
  }

  animate () {
  	console.log('animate')
		requestAnimationFrame( this.animate );
		this.cube.rotation.x += 0.1;
		this.cube.rotation.y += 0.1;
		this.renderer.render(this.scene, this.camera);
	}
}

export default Three