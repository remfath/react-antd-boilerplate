import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import React, {Component} from 'react';
import './static/scss/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <AppMain/>
            </div>
        );
    }
}

export default App;
