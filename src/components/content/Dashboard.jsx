import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Paper, Grid } from '@material-ui/core';

class Dashboard extends React.Component {
    
    render() {
        return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper style={{ backgroundColor: '#f4f4f4', height: '64px' }}>
                            Test
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper style={{ backgroundColor: '#f4f4f4', height: '64px' }}>
                            Test 2
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ backgroundColor: '#f4f4f4', height: '64px' }}>
                            Test 3
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Dashboard;