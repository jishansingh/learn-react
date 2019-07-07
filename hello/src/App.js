import React, { Component } from 'react';
import Hello from './components/hello'
import Message from './components/messsage'
import Bye from './components/bye'
import GreetParent from './components/parent'
import GreetUser from './components/usergreet'
import NameList from './components/namelist'
import NameStyle from './components/stylesheet'
import UsernameForm from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="jishan"/>
        <Message name="kiki"/>
        <Bye />
        <GreetParent />
        <GreetUser />
        <NameList />
        <NameStyle primary={true}/>
        <UsernameForm />
      </div>
    );
  }
}

export default App;
