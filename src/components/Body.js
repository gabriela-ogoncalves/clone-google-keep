import React from 'react';
import InsertNote from './InsertNote';
import GridNotes from './Listagem/GridNotes';

function Body() {
    return(
        <div style={{minHeight: '80vh', height: 'auto'}}>
            <InsertNote />
            <GridNotes />
        </div>
    );
}

export default Body;
