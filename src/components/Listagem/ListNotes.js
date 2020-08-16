import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    list: {
        padding: 0
    },
    descricao: {
        textDecoration: 'line-through',
    },
    hover: {
        "&:hover": {
            backgroundColor: "#FEEFC3"
          },
    },
  });

function ListNotes(props) {
    const classes = useStyles();

    return(
        <Card elevation={2}>
            <List className={classes.list}>
                {
                props.tarefas.map((tarefa) => {
                    return(
                    <ListItem 
                        dense 
                        button 
                        key={tarefa.id} 
                        onClick={() => { props.alternarFinalizacao(tarefa) }} 
                    >
                        <ListItemIcon>
                        <Checkbox
                            style={ tarefa.finalizada ?  { color: '#FE9A2E'} : null}
                            edge="start"
                            checked={tarefa.finalizada}
                            disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText 
                            className={tarefa.finalizada ? classes.descricao : null} 
                            primary={tarefa.descricao}
                        />
                        <ListItemSecondaryAction onClick={ () => { props.deletarTarefa(tarefa) }}>
                            <IconButton edge="end" aria-label="trash" className={classes.hover} >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                })
                }
            </List>
        </Card>
    );
}

export default ListNotes;
