import React,{Component} from 'react'

class GreetUser extends Component{
	constructor(props){
		super(props)
		this.state={isLoggedIn:true}
	}

	render(){
		return(
			this.state.isLoggedIn?<h1>hello jishan</h1>:<h1>hello unknown</h1>
		)
		// let message
		// if(this.state.isLoggedIn){
		// 	message=<div>hello jishan</div>
		// }
		// else{
		// 	message=<div>hello unknown</div>
		// }
		// return(<h1>{message}</h1>)
		
	}
}
export default GreetUser