import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import classes from "./style.module.css";
import {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export const ToggleEditPlugin = () => {
    const editModeTitle = "Toggle to read mode"
    const readModeTitle = "Toggle to edit mode"
    const [editor] = useLexicalComposerContext();
    const [isEditable, setIsEditable] = useState(true)

    useEffect(() => {
        setIsEditable(editor.isEditable());
    }, []);

    const toggleEditHandler = () => {
        const isEditable = editor.isEditable();
        editor.setEditable(!isEditable);
        setIsEditable(!isEditable)
    }

    return <button className={classes.ToggleEdit}
                   onClick={toggleEditHandler}>
        {isEditable ? <EditIcon/> : <RemoveRedEyeIcon/>}
        <span className={classes.Title}>{isEditable ? editModeTitle : readModeTitle}</span>
    </button>
}