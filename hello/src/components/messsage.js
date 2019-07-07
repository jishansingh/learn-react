import React,{Component} from 'react'
class Message extends Component{
	constructor(props){
		super(props)
		this.state={
			count:0
		}
	}
	change(){
		this.setState({
			count:this.state.count+1
		})
	}
	
	render(){
		return (
			<div>
				<h1>
				count {this.state.count}
				</h1>
				<button onClick={()=>this.change()}>click me</button>
			</div>
			)
	}
}
export default Message