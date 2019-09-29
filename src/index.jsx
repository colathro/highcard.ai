import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar'
import Dashboard from './components/content/Dashboard'
import { flexbox } from '@material-ui/system';

class App extends React.Component {
    state = {
        SideBarOpen: true,
    };

    toggleSideBar = () => {
        this.setState( { SideBarOpen: !this.state.SideBarOpen } );
    };

    render() {
        return (
            <div style={{ display: 'flex'}}>
                <TopBar toggleSideBar={this.toggleSideBar} ></TopBar>
                <SideBar SideBarOpen={this.state.SideBarOpen} ></SideBar>
                <Dashboard></Dashboard>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));