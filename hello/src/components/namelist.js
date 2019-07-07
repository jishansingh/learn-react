import React,{Component} from 'react'

class NameList extends Component{
	
	render(){
		let names=['jsihan','himmat','kiki']
		let namelist=names.map(name=><h1>{name}</h1>)
		return <div>{namelist}</div>
	}
}
export default NameList