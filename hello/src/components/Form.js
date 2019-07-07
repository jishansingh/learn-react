import React,{Component} from 'react'

class UsernameForm extends Component{
	constructor(props){
		super(props)
		this.state={username:'',comment:''}
	}
	UpdateForm = (event) =>{
		this.setState({
			username:event.target.value
		})
	}
	commentForm=(event)=>{
		this.setState({
			comment:event.target.value
		})
	}
	handleSubmit=(event)=>{
		alert(`${this.state.username} has commented ${this.state.comment}`)
		event.preventDefault()
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
			<label>username</label>
			<input type='text' value={this.state.username} onChange={this.UpdateForm}/>
			<div>
			<label>comment</label>
			<textarea value={this.state.comment} onChange={this.commentForm} />
			</div>
			<div>
			</div>
			<button type='submit'>submit</button>
			</form>
		)
	}
}


export default UsernameForm