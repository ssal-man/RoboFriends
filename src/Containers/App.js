import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';
import { setSearchField,requestRobots} from '../Actions';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        searchfield : state.searchRobots.searchfield,
        robots:state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}



class App extends Component{

    componentDidMount=()=>{
        this.props.onRequestRobots()
    }
 
    render()
    {
        const filteredrobots=this.props.robots.filter(robot=>{
            return(robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase()))
        })
        return(
            <div className='tc'>
            <h1>R O B O F R I E N D S</h1>
            <SearchBox searchchange={this.props.onSearchChange}/>
            <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredrobots}/>
            </ErrorBoundry>
            </Scroll>
            </div>);
    }        
}
export default connect(mapStateToProps,mapDispatchToProps)(App);