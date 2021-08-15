import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Desaparecer() {
    document.getElementById("App-logo").style.display = "none";
}

export default function ButtonSec (){
    return(
        <div>
            <Button variant = "contained" onClick = {Desaparecer}>Secret Button</Button>
        </div>
    );
}