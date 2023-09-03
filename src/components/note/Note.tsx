import React, {PropsWithChildren} from 'react';
import classes from "./style.module.css";
import {INoteProps} from "@/components/note/interface";

const Note: React.FC<PropsWithChildren<INoteProps>> = (props: INoteProps) => {
    return (
        <div className={classes.Note}>
            <div>{props.name}</div>
            <div>{props.content}</div>
            <div>{props.creationTime.toLocaleDateString()}</div>
        </div>
    );
};

export default Note;