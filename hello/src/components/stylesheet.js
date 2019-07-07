import React,{Component} from 'react'
import './style.css'

class NameStyle extends Component{
	render(){
		let heading={
			color:'blue',
			fontSize:'40px',
		}
		return(
			<div>
			<h1 className={this.props.primary?'primary':''}>Jishan</h1>
			<h2 style={heading}>sub heading</h2>
			</div>
		)
	}
}


export default NameStyle
