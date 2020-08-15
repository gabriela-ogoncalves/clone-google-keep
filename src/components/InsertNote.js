import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    display: 'flex',
    alignContent: 'center'
  },
  card: {
      paddingTop: 10,
      paddingBottom: '20px !important',
      paddingLeft: 30,
      paddingRight: 30
  },
  input: {
      fontWeight: 400,
  }
});

export default function InsertNote() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify='center' >
        <Grid item xs={12} sm={8} >
            <Card elevation={2}>
                <CardContent className={ classes.card }>
                    <InputBase placeholder="Criar uma tarefa..." fullWidth className={classes.input} />
                </CardContent>
            </Card>
        </Grid>
    </Grid>

  );
}
