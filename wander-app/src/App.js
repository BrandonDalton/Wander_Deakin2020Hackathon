import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grid from '@material-ui/core/Grid';
import './App.scss';
import Timer from './Timer';
import Goal from './Goal';

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Paper>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <div class="homePage--container">
          <Timer />
        </div>
      </Grid>
      <Grid item xs={3}>
        <Goal />
      </Grid>
    </Grid>
  )
}

export default App;
