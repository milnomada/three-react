# three-react
A simple integration of [three.js](https://threejs.org/) with [React.js](https://reactjs.org/) and [Redux](https://redux.js.org/)

The basic Three.js functionality shown in *Creating a scene tutorial* is wrapped into a simple class Three.

The `Three` class has few attribtues for the scene:

`scene: Scene`  
`camera: PerspectiveCamera`   
`renderer: WebGLRenderer`  

and for the basic shape:

`geometry: BoxGeometry`  
`material: MeshBasicMaterial`  

It exposes two methods:  
`start()`   To set up the scenario framework   
`animate()` To trigger the aniamtion loop

This class is integrated in a simple React component in the shape:

```
componentWillMount(){
  Three.start()
}
componentDidMount(){
  Three.animate()
}
```
