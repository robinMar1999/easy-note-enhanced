import React from 'react';
import classes from "./style.module.css";
import RootActions from "@/components/collection-menu-pane/RootActions";
import CollectionInfo from "@/components/collection-menu-pane/CollectionInfo";
import {EntityNode, EntityType, getMenuData} from "@/components/collection-menu-pane/data";
import CollectionFolder from "@/components/collection-menu-pane/CollectionFolder";
import {Resizable} from "re-resizable";
import {Tree, TreeNode} from "@/components/utils/tree";
import HydrationProvider from "@/components/utils/HydrationProvider";
import FileTree from "@/components/collection-menu-pane/FileTree";
import {ICollectionMenuPaneProps} from "@/components/collection-menu-pane/interface";



const CollectionMenuPane: React.FC<ICollectionMenuPaneProps> = ({visible, rootNode, tree, clickOnFile}) => {

    return (

        <Resizable className={[classes.Resizable, visible ? classes.Visible : ""].join(" ")} enable={{
            top: false,
            right: true,

            bottom: false,
            left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false
        }}
        defaultSize={{
            width: "20%",
            height: "100vh"
        }}>
            <div className={classes.CollectionMenuPane}>

                <RootActions/>
                <CollectionInfo rootNode = {rootNode}>
                    <FileTree data={tree.getNodes()} clickOnFile={clickOnFile} />
                </CollectionInfo>

            </div>
        </Resizable>
    );
};

export default CollectionMenuPane;