import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry from "../components/ErrorBoundry";

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => {setRobots(users)})
    },[count])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
    
    return !robots.length ?
        <h1>Loading</h1>:
         (<div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click me! - Current Count: {count}</button>
            
            <button onClick={()=>setCount(0)}>Reset Count</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>);
        
     
}

export default App;