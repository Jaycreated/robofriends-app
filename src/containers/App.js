import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
//import { robots } from './robots.js';
import '../components/Scroll.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
            
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({ robots: users  }));
    }
 
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
    }

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading</h1> :
         (
                <React.Fragment>
        
                    <div className='tc'>
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <scroll>
                         <CardList robots={filteredRobots} />
                        </scroll>   
                    </div>
                </React.Fragment>
             );
            }
    }



export default App