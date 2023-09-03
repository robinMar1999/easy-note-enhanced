import React from 'react';
import {INotesListProps} from "@/components/note/interface";
import Note from "@/components/note/Note";
import classes from "./style.module.css"

// TODO: Change this to collections List
const NotesList: React.FC<INotesListProps> = (props: INotesListProps) => {
    return (
        <div className={classes.NotesList}>
            {props.notes.map(note =>
                <Note
                    key={note.id}
                    id={note.id}
                    name={note.name}
                    content={note.content}
                    creationTime={note.creationTime}/>)}
        </div>
    );
};

export default NotesList;