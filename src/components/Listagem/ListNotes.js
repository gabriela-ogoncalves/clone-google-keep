import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    list: {
        padding: 0
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
                    <ListItem dense button key={tarefa.id} >
                        <ListItemIcon>
                        <Checkbox
                            style={ tarefa.finalizada ?  { color: '#FE9A2E'} : null}
                            edge="start"
                            checked={tarefa.finalizada}
                            disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={tarefa.descricao}/>
                    </ListItem>
                    );
                })
                }
            </List>
        </Card>
    );
}

export default ListNotes;
