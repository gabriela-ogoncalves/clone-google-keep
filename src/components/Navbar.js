import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

import Logo from '../images/keep_logo.png';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: '#FFF',
      color: '#616161',
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 10,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      borderRight: 'none',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    logo: {
      marginRight: 10,
    },
    title: {
      fontWeight: 400 
    },
    listItem: {
      borderBottomRightRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#FEEFC3',
    }
  }));

function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
        <div>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classes.appBar}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
               <Avatar src={Logo} className={classes.logo} alt="Logo" />
              <Typography variant="h6" className={classes.title} noWrap>
              Keep
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
            </div>
            <Divider />
            <List>
                <ListItem button className={classes.listItem} >
                  <ListItemIcon>{ <EmojiObjectsOutlinedIcon /> }</ListItemIcon>
                  <ListItemText  primary="Notas"/>
                </ListItem>
            </List>
          </Drawer>
        </div>
    )
}

export default Navbar;
