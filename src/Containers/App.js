import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';
class App extends Component{
    constructor()
    {
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=>{this.setState({robots:users})})
    }
 onSearchChange=(event)=>
    {
        this.setState({searchfield:event.target.value});
        
    }
    render()
    {
        const filteredrobots=this.state.robots.filter(robot=>{
            return(robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        })
        return(
            <div className='tc'>
            <h1>R O B O F R I E N D S</h1>
            <SearchBox searchchange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredrobots}/>
            </ErrorBoundry>
            </Scroll>
            </div>);
    }        
}
export default App;