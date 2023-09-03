import {ITreeNode} from "@/components/utils/tree";
import {faker} from "@faker-js/faker";

export enum EntityType {
    FOLDER,
    FILE,
}

export class EntityNode implements ITreeNode<EntityNode> {
    id: string;
    name: string;
    type: EntityType;

    constructor(id: string, name: string, type: EntityType) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    isTerminal(): boolean {
        return this.type === EntityType.FILE;
    }

    compare(b: EntityNode): number {
        if(this.type === b.type) {
            return this.name.localeCompare(b.name);
        } else if(this.type === EntityType.FILE) {
            return 1;
        } else {
            return -1;
        }
    }

    static getFolderNode(): EntityNode {
        return new EntityNode(
            faker.database.mongodbObjectId(),
            faker.word.noun(),
            EntityType.FOLDER
        )
    }

    static getFileNode(): EntityNode {
        return new EntityNode(
            faker.database.mongodbObjectId(),
            faker.word.noun(),
            EntityType.FILE
        )
    }
}

export const getMenuData = () => {
    const rootNode = new EntityNode(
        faker.database.mongodbObjectId(),
        "Sample Collection",
        EntityType.FOLDER)
    const childParentMap: Map<EntityNode, EntityNode> = new Map<EntityNode, EntityNode>();
    // create 3 folder at root level
    const folder1 = EntityNode.getFolderNode()
    childParentMap.set(EntityNode.getFileNode(), folder1);
    childParentMap.set(EntityNode.getFileNode(), folder1);
    childParentMap.set(EntityNode.getFileNode(), folder1);
    const folder2 = EntityNode.getFolderNode()
    childParentMap.set(EntityNode.getFileNode(), folder2);
    childParentMap.set(EntityNode.getFileNode(), folder2);
    const folder3 = EntityNode.getFolderNode();
    childParentMap.set(folder3, folder2);
    childParentMap.set(EntityNode.getFileNode(), folder3);
    childParentMap.set(EntityNode.getFileNode(), folder3);
    childParentMap.set(EntityNode.getFileNode(), folder3);

    childParentMap.set(folder1, rootNode);
    childParentMap.set(folder2, rootNode);

    childParentMap.set(EntityNode.getFileNode(), rootNode);
    childParentMap.set(EntityNode.getFileNode(), rootNode);

    return {
        rootNode,
        childParentMap
    }
}