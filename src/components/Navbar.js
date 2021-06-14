import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Collections } from '@material-ui/icons';

const usesStyles = makeStyles({
    component: {
        background: '#445A6F'
    }
})

function Navbar() {
    const classes = usesStyles();

    return (
       <AppBar className={classes.component} position="static">
           <Toolbar>
               <Collections />
               <Typography variant="h5" style={{margin: 10}}>Image Finder</Typography>
           </Toolbar>
       </AppBar>
    )
}

export default Navbar;


