import { Snackbar } from '@material-ui/core'
import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';
function SnackBar({ open, toggleSnack }) {

    function handleClose(){
        toggleSnack(false);
    }



    return (
        <Snackbar open={open} autoHideDuration={4000} onClose= {handleClose} >
            <MuiAlert severity= 'info' onClose={handleClose} >
              Number of images should be between 3 and 200!
               
            </MuiAlert>
        </Snackbar>
    )
}

export default SnackBar
