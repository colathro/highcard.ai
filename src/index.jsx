import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button }from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

class App extends React.Component {
    state = {
        ActiveTab: 0,

    };

    changeTab = (e, tab) => {
        this.setState({ ActiveTab: tab});
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            News
                        </Typography>
                        <Tabs value={this.state.ActiveTab} onChange={this.changeTab} aria-label="simple tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <TabPanel value={this.state.ActiveTab} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={this.state.ActiveTab} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={this.state.ActiveTab} index={2}>
                    Item Three
                </TabPanel>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));