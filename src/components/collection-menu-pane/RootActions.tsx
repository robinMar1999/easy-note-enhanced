import React from 'react';
import classes from "./style.module.css";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const RootActions = () => {
    return (
        <div className={classes.RootActions}>
            <span className={classes.RootActionItem}>
                <NoteAddIcon fontSize={"inherit"}/>
                <span className={classes.Title}>New File...</span>
            </span>
            <span className={classes.RootActionItem}>
                <CreateNewFolderIcon fontSize={"inherit"} />
                <span className={classes.Title}>New Folder...</span>
            </span>
        </div>
    );
};

export default RootActions;