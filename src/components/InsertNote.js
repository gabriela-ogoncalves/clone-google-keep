import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';

import repository from '../crud'

const useStyles = makeStyles({
  card: {
      paddingTop: 20,
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
  const [tarefas, setTarefas] = useState('');
  const [novaTarefa, setNovaTarefa] = useState('');
  
  function addTarefa(event) {
    const ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
      const data = { descricao: novaTarefa, finalizada: false }
      if (novaTarefa === '') {
        return;
      }
      repository.salvarNovaTarefa(data)
        .then( () => getListaDeTarefas() )
      setNovaTarefa('');
    }
  }

  useEffect(() => {
    getListaDeTarefas();
  }, [])

  function getListaDeTarefas() {
    repository.getTarefasCadastradas().then(lista => {
      console.log('lista: ', lista)
      setTarefas(lista)
    })
  }

  return (
    <Grid container spacing={3} justify='center' >
        <Grid item xs={12} sm={8} >
            <Card elevation={2}>
                <CardContent className={ classes.card }>
                    <InputBase 
                      placeholder="Criar uma tarefa..." 
                      value={novaTarefa}
                      fullWidth 
                      className={classes.input} 
                      onKeyUp={addTarefa}
                      onChange={ event => setNovaTarefa(event.target.value) }
                    />
                </CardContent>
            </Card>
        </Grid>
    </Grid>

  );
}
