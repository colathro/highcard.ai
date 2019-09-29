import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import SettingsIcon from '@material-ui/icons/Settings'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class SideBar extends React.Component {
    
    render() {
        return (
            <Drawer variant="persistent" anchor="left" open={this.props.SideBarOpen} style={{ flexShrink: 0, zIndex: 0}}>
                    <IconButton>
                        <CodeIcon />
                    </IconButton>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon style={{ minWidth: '35px' }}><DashboardIcon  color='primary' /></ListItemIcon>
                            <ListItemText primary='Dashboard' style={{ color: '#5d5c5c' }}></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon style={{ minWidth: '35px' }}><LockOpenIcon  color='primary' /></ListItemIcon>
                            <ListItemText primary='API Tokens' style={{ color: '#5d5c5c' }}></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon style={{ minWidth: '35px' }}><SettingsIcon  color='primary' /></ListItemIcon>
                            <ListItemText primary='Settings' style={{ color: '#5d5c5c' }}></ListItemText>
                        </ListItem>
                    </List>
            </Drawer>
        );
    }
}

export default SideBar;