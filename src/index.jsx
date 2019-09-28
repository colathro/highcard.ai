import React from 'react';
import ReactDOM from 'react-dom';
import TestApp from './TestApp';
import MenuAppBar from './components/MenuAppBar';


class App extends React.Component {
    render() {
        return (
            <div>
                <MenuAppBar></MenuAppBar>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));