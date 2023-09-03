
export interface ITreeNode<T> {
    isTerminal(): boolean;
    compare(b: T): number;
}

export class TreeNode<T extends ITreeNode<T>> {
    value: T;
    children: TreeNode<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }

    addChild(child: TreeNode<T>): void {
        this.children.push(child);
    }

    compare(b: TreeNode<T>): number {
        return this.value.compare(b.value);
    }
}

export class Tree<T extends ITreeNode<T>> {
    private nodes: TreeNode<T>[];
    private childParentMap: Map<T,T>;
    private nodeToChildrenMap: Map<T, T[]>;

    constructor(rootNode: T, childParentMap: Map<T, T>) {
        this.childParentMap = childParentMap;
        this.nodeToChildrenMap = new Map<T, T[]>()
        this.nodes = []
        this.childParentMap.forEach((value: T, key: T) => {
            if(this.nodeToChildrenMap.get(value)) {
                this.nodeToChildrenMap.get(value)?.push(key);
            } else {
                this.nodeToChildrenMap.set(value, [key]);
            }
        });
        this.validateNotCyclic(this.nodeToChildrenMap);

        this.nodeToChildrenMap.get(rootNode)?.forEach(child => {
            const nodeToPush = new TreeNode(child);
            this.nodes.push(nodeToPush);
            this.populateChildren(nodeToPush);
        })

    }

    populateChildren(node: TreeNode<T>) {
        this.nodeToChildrenMap.get(node.value)?.forEach(child => {
            const nodeToPush = new TreeNode(child);
            node.addChild(nodeToPush);
            this.populateChildren(nodeToPush);
        })
    }

    validateNotCyclic(nodeToChildrenMap: Map<T, T[]>) {
        // TODO: implement this method
    }

    addNode(node: TreeNode<T>): void {
        this.nodes.push(node);
    }

    getNodes() {
        return this.nodes.slice();
    }
}






