import React,{Component} from 'react'
import ChildComponent from './child'

class GreetParent extends Component{
	constructor(props){
		super(props)
		this.state={'parentname':'parent'}
		this.gretting=this.gretting.bind(this)
	}
	gretting(child){
		alert(`hello ${this.state.parentname} of ${child}`)
	}
	render(){
		return (
			<div>
			<ChildComponent greetfunc={() => this.gretting('child')}/>
			</div>
		)
	}
}


export default GreetParent
