import React from 'react';
import {ITabEditorProps} from "@/components/collection-editor-pane/interface";
import classes from "./style.module.css"
import RichTextEditor from "@/components/rich-text-editor";

const TabEditor: React.FC<ITabEditorProps> = ({visible}) => {
    return (
        <div className={[classes.TabEditor, visible ? classes.Visible : ""].join(" ")}>
            <RichTextEditor />
        </div>
    );
};

export default TabEditor;