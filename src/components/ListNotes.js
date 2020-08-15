import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  list: {
      padding: 0
  },
  container: {
    marginTop: 40,
  },
  checkbox: {
    color: '#616161',
  }
});

export default function InsertNote() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justify='flex-start' className={classes.container} >
        <Grid item xs={12} sm={4} >
          <Card elevation={2}>
            <List className={classes.list}>
              <ListItem dense button >
                  <ListItemIcon>
                    <Checkbox
                      style={{color: '#FE9A2E'}}
                      edge="start"
                      checked={true}
                      disableRipple
                    />
                  </ListItemIcon>
                <ListItemText primary="teste"/>
              </ListItem>
            </List>
          </Card>
      </Grid>
    </Grid>

  );
}
