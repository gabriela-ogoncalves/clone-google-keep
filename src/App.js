import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './components/Navbar';
import Body from './components/Body';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:'#FFF',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: 0,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Body />
      
      </main>
    </div>
  );
}
