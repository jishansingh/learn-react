import React,{Component} from 'react'

class Bye extends Component{
	constructor(props){
		super(props)
		this.state={message:'hi how are you'}
	}
	change(){
		this.setState({
			message:'ok bye'
		})
	}
	render(){
		return(
			<div>
			<h1>{this.state.message}</h1>
			<button onClick={this.change.bind(this)}>fine</button>
			</div>
		)
	}
}

export default Bye
