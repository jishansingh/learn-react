import React from 'react'

function ChildComponent(props){
	return(
		<div>
		<button onClick={props.greetfunc}>greet</button>
		</div>
	)
}
export default ChildComponent