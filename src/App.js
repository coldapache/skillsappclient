import React from 'react';
import './App.css';
import AirmanList from './components/AirmanList';

//temporary list of Airman
import sampleAirman from './sampleAirmen';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfAirman: sampleAirman
        } 
    }

    render() {
        return (
            <div className="App">
                <AirmanList listOfAirman={this.state.listOfAirman}/>
            </div>
        )
    }
}


export default App;
