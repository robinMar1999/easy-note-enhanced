import React, {PropsWithChildren} from 'react';
import classes from "./style.module.css";
import {ICollectionInfoProps} from "@/components/collection-menu-pane/interface";

const CollectionInfo: React.FC<PropsWithChildren<ICollectionInfoProps>> = ({rootNode, children}) => {
    return (
        <div className={classes.CollectionInfo}>
            <div className={classes.CollectionTitle}>
                {rootNode.name}
            </div>
            <div className={classes.ShiftFromLeft}>
                {children}
            </div>
        </div>
    );
};

export default CollectionInfo;