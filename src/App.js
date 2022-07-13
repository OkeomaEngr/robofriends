import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

//STATE : view react file 
//Note that our app componenet has two states 
class App extends React.Component { // a component always has a render
  constructor() {
    super()
    this.state = { 
        robots: robots, //state 1
        searchfield: '' //state 2
    }
  }

  onSearchChange = (event) => { // 
    this.setState({searchfield: event.target.value}) // if you wanna change the state , always remember to add target.value
      console.log(event.target.value); // always remember this 
  }
  
  render(){ // This is where the action happens ;)
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
  return(
    <div className='tc'>
    <h1>RoboFriends</h1>
    <SearchBox searchchange={this.onSearchChange}/>
    <CardList robots  = {filteredRobots}/>
    </div>
  );
}
}

export default App;
