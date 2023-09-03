import {EntityNode} from "@/components/collection-menu-pane/data";
import {Tree, TreeNode} from "@/components/utils/tree";

export interface ICollectionFolderProps {
    name: string;
}

export interface ICollectionInfoProps {
    rootNode: EntityNode;
}

export interface IFileTreeProps {
    data: TreeNode<EntityNode>[];
    clickOnFile(id: EntityNode): void;
}

export interface ICollectionMenuPaneProps {
    visible: boolean;
    rootNode: EntityNode;
    tree: Tree<EntityNode>;
    clickOnFile(id: EntityNode): void;
}