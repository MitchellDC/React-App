import React, {Component} from 'react'; 
import axios from 'axios'

class App extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state={
            players:[]
        }
    }

    async componentDidMount() {
        
    }

    render() {
        return(
            <div className='App'>
            <h1>Hi</h1>
            </div>
        )
    }
}

export default App; 