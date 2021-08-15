import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit"className={classes.title}>
                <HomeIcon/>
            </Button>

            <Button color="inherit"className={classes.title}>
                <ListAltIcon/>
                Inventario</Button>

            <Button color="inherit" className={classes.title}>
                <PersonAddIcon/>
                Regristro de cleinte</Button>

            <Button color="inherit"className={classes.title}>
                <AddShoppingCartIcon/>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
