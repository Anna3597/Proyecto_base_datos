import React from 'react';
import TextField from '@material-ui/core/TextField';
import { colors, makeStyles } from '@material-ui/core';


const useStyle = makeStyles ((theme)=>({
    root:{
        
    }
}));

export default function TextF () {
    
    const clase = useStyle();
    
    return(
    <form className ={clase.root} noValidate autoComplete = "off">
        <input>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" ref ={this.nombre} />
        </input>
    </form>



    );
}