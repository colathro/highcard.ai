import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';




class TopBar extends React.Component {
    render() {
        return (
            <AppBar position="fixed" color='primary'>
                <Toolbar variant='dense' style={{paddingLeft: '16px'}}>
                    <IconButton edge="start" color='inherit' aria-label="menu" onClick={this.props.toggleSideBar}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        highcard ai
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;