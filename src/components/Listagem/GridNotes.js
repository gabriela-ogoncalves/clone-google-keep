import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import List from './ListNotes'
import repository from '../../crud'

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

export default function GridNotes() {
  const classes = useStyles();
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    repository.getTarefasCadastradas()
      .then(listaDeTarefas => {
        setTarefas(listaDeTarefas)
      });
  })

  function alternarFinalizacao(tarefa) {
    const data = { descricao: tarefa.descricao, finalizada: !tarefa.finalizada }
    repository.atualizarSituacao(tarefa, data)
  }

  return (
    <Grid container spacing={2} justify='flex-start' className={classes.container} >
        <Grid item xs={12} sm={4} >
          <List tarefas={tarefas} alternarFinalizacao={alternarFinalizacao} />
      </Grid>
    </Grid>
  );
}
