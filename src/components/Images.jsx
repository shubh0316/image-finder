import { Grid } from '@material-ui/core';
import React from 'react'
import Image from './Image';
function Images({data}) {
    console.log('data', data);
    return (
    <Grid container >
    {
       data.map(image => (
            <Grid  key={image.id}   xs={4} item ><Image image={image} /></Grid>
       ))
    }   
    </Grid>   
    )
}

export default Images;
