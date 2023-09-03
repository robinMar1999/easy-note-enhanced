import React, {PropsWithChildren} from 'react';
import classes from "./style.module.css";
import {ICollectionFolderProps} from "@/components/collection-menu-pane/interface";

const CollectionFolder: React.FC<PropsWithChildren<ICollectionFolderProps>> = (props) => {
    return (
        <div className={classes.CollectionFolder}>
            <div className={classes.CollectionFolder_name}>
                {props.name}
            </div>
            <div className={classes.ShiftFromLeft}>
                {props.children}
            </div>
        </div>
    );
};

export default CollectionFolder;