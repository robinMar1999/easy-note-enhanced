import React from 'react';
import classes from "./style.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import {ICollectionSidebarProps} from "@/components/collection-sidebar/interface";

const CollectionSidebar: React.FC<ICollectionSidebarProps> = ({onClick}) => {
    return (
        <div className={classes.CollectionSidebar}>
            <span onClick={onClick} className={classes.ToggleMenu}>
                <MenuIcon color={"inherit"} fontSize={"inherit"} />
            </span>
        </div>
    );
};

export default CollectionSidebar;