import React, {Component, useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry from "../components/ErrorBoundry";

function App {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('');

    onSearchChange = (event) => {
        setSearchfield(event.target.value)
    } 

    render() {
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading</h1>:
        
         (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>);
        }
     
}

export default App;