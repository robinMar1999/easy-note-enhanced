import React from 'react';
import {TreeNode} from "@/components/utils/tree";
import {EntityNode, EntityType} from "@/components/collection-menu-pane/data";
import classes from "@/components/collection-menu-pane/style.module.css";
import CollectionFolder from "@/components/collection-menu-pane/CollectionFolder";
import {IFileTreeProps} from "@/components/collection-menu-pane/interface";

const FileTree: React.FC<IFileTreeProps> = ({data, clickOnFile}) => {

    const convertDataToJsx = (data: TreeNode<EntityNode>[]): React.JSX.Element[] => {
        return data.sort((a: TreeNode<EntityNode>, b: TreeNode<EntityNode>) => {
            return a.compare(b);
        })
            .map(node => {
                if (node.value.type === EntityType.FILE) {
                    return <div key={node.value.id} className={classes.CollectionFile}
                                onClick={() => clickOnFile(node.value)}>
                        {node.value.name}
                    </div>
                } else {
                    return <CollectionFolder key={node.value.id} name={node.value.name}>
                        {convertDataToJsx(node.children)}
                    </CollectionFolder>
                }
            });
    }

    return (
        <>
            {convertDataToJsx(data)}
        </>
    );
};

export default FileTree;