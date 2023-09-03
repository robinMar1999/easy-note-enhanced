import {EntityNode} from "@/components/collection-menu-pane/data";
import {EditorState, LexicalEditor} from "lexical";

export interface ICollectionEditorPaneProps {
    openedTabs: EntityNode[];
    selectedTab?: EntityNode;
    selectTab: (node: EntityNode) => void;
    closeTab: (node: EntityNode) => void;
    openedTabsContent: Map<EntityNode, string | undefined>;
    onContentChange: (node: EntityNode, editorState: EditorState, editor: LexicalEditor) => void;
}

export interface ITabsProps {
    tabs: EntityNode[];
    selectedTab?: EntityNode;
    selectTab: (node: EntityNode) => void;
    closeTab: (node: EntityNode) => void;
}

export interface ITabEditorProps {
    visible: boolean;
}