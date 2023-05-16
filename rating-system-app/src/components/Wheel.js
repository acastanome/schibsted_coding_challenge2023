import React from 'react'
import Thumbsup from './Thumbsup';

export default class Wheel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			percentage: props.percentage,
			currentAngle: 0,
			oldAngle: 0,
			lastAngles :[0,0,0],
			isDragging: false,
			startX: null,
			startY: null,
		
			positionCallbacks: []
		}
		this.onRelease = this.onRelease.bind(this);
		this.onGrab = this.onGrab.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMove = this.onMove.bind(this);

	}

	calculatePositions(){
        this.wheelWidth = this.wheelElm.getBoundingClientRect()['width'];
        this.wheelHeight = this.wheelElm.getBoundingClientRect()['height']
        this.wheelX = this.wheelElm.getBoundingClientRect()['x'] + this.wheelWidth / 2;
        this.wheelY = this.wheelElm.getBoundingClientRect()['y'] + this.wheelHeight / 2;
	}

	onPositionChange(callback){
	this.positionCallbacks.push(callback);
	}

	calculateAngle(currentX, currentY){
        let xLength = currentX - this.wheelX;
        let yLength = currentY - this.wheelY;
        let angle = Math.atan2(xLength, yLength) * (180/Math.PI);
        return 365 - angle;
	}
	
	onMouseMove(e) {
		this.onMove(e.clientX, e.clientY);
		// if(e.which == 1) {
		// 	console.log("here")
		// 	this.onMove(e.clientX, e.clientY);
		// }
	  	// else if (!this.isDragging) {
		// 	console.log("not here")
		// 	  this.onRelease()
		//   }
	}

	onRelease(){
        if(this.isDragging){
          this.isDragging = false;
          this.oldAngle = this.currentAngle;
        }		
      }
	  
	  onMove(x, y){
		let percentage
        if(!this.isDragging)
          return
    
        this.lastAngles.shift();
        this.lastAngles.push(this.currentAngle);
    
        let deltaAngle = this.calculateAngle(x, y) - this.startAngle;
        this.currentAngle = deltaAngle + this.oldAngle;
		// console.log("current angle: " + this.currentAngle + " score: " + this.props.percentage)
		if (Math.abs(this.currentAngle) <= 180) {
			percentage = 100 - Math.abs(this.currentAngle) * 100 / 180
		}
		else {
			percentage = ((Math.abs(this.currentAngle) % 180) * 100 / 180)
		}
		if (this.currentAngle <= 180 && this.currentAngle >= 0) {
			this.props.updateState({
				currentAngle: this.currentAngle,
				percentage: percentage
			})
		}
	  }

	componentDidMount() {
		this.wheelElm = document.getElementById('wheel-svg');
		this.calculatePositions();

		this.currentAngle = 0;
        this.oldAngle = 0;
        this.lastAngles = [0,0,0];
        this.isDragging = false;
        this.startX = null;
        this.startY = null;
    
        this.positionCallbacks = [];
	}
	  
	  componentDidUpdate() {
		  let deg = this.props.currentAngle
			this.wheelElm.style.transform = `rotate(${deg}deg)`;
			for(let callback of this.positionCallbacks){
				callback(deg);
			}
	  }

	  onGrab (x, y) {
		  this.isDragging = true;
          this.startAngle = this.calculateAngle(x, y);	
	}

	render () {
		let {
			percentage,
			currentAngle
		} = this.props

		// console.log("angle  " + currentAngle + ", % : ", percentage)
		return (
			<div
				className="wheel"
				onMouseDown={(e) => this.onGrab(e.clientX, e.clientY)}
				onMouseMove={(e) => {this.onMouseMove(e)}}
				onMouseUp={() => {this.onRelease()}}
				onTouchStart={(e) => {this.onGrab(e.touches[0].clientX, e.touches[0].clientY)}}
				onTouchMove={(e) => {this.onMove(e.touches[0].clientX, e.touches[0].clientY)}}
				onTouchEnd={() => {this.onRelease()}}
			>
				<div>
					<Thumbsup
						percentage={percentage}
					/>
				</div>
			</div>
		)
	}
}

/*
animation from: https://codepen.io/Coderesting/pen/BaaELKv
*/