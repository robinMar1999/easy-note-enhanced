import React, {useLayoutEffect, useState} from 'react';
import {useRouter} from "next/router";
import CollectionMenuPane from "@/components/collection-menu-pane";
import CollectionEditorPane from "@/components/collection-editor-pane";
import classes from "@/styles/collection.module.css";
import {EntityNode, getMenuData} from "@/components/collection-menu-pane/data";
import {Tree} from "@/components/utils/tree";
import HydrationProvider from "@/components/utils/HydrationProvider";
import {EditorState, LexicalEditor} from "lexical";
import CollectionSidebar from "@/components/collection-sidebar";

const CollectionPage = () => {

    const [{rootNode, childParentMap}] = useState(() => getMenuData())
    const tree = new Tree(rootNode, childParentMap);

    const [openedTabs, setOpenedTabs] = useState<EntityNode[]>([])

    const [openedTabsContent, setOpenedTabsContent] =
        useState<Map<EntityNode, string | undefined>>(new Map())

    const [selectedTab, setSelectedTab] = useState<EntityNode>();
    const [menuVisible, setMenuVisible] = useState(true);

    const clickOnFile = (node: EntityNode) => {
        setOpenedTabs(prevOpenedTabs => {
            if(prevOpenedTabs.findIndex(tab => tab === node) !== -1) {
                return [...prevOpenedTabs];
            } else {
                return [...prevOpenedTabs, node];
            }
        })
        setSelectedTab(node);
        setOpenedTabsContent(prevContent => {
            const newContent = new Map(prevContent);
            if(newContent.has(node)) {
                return newContent;
            }
            newContent.set(node, undefined);
            return newContent;
        })
    }

    const onContentChange = (node: EntityNode, editorState: EditorState, editor: LexicalEditor) => {
        setOpenedTabsContent(prevContent => {
            if(!prevContent.has(node)) {
                throw new Error("Something went wrong! node is not present in openedTabsContent.")
            }
            const newContent: Map<EntityNode, string | undefined> = new Map(prevContent);
            newContent.set(node, JSON.stringify(editorState));
            return newContent;
        })
    }

    const selectTabHandler = (node: EntityNode) => {
        setSelectedTab(node);
    }

    const closeTabHandler = (node: EntityNode) => {
        setOpenedTabs(prevOpenedTabs => {
            return prevOpenedTabs.filter(tab => tab !== node);
        })
    }

    useLayoutEffect(() => {
        if(selectedTab && openedTabs.length > 0) {
            const index = openedTabs.indexOf(selectedTab);
            if(index === -1) {
                setSelectedTab(openedTabs[0])
            }
        } else if(selectedTab && openedTabs.length === 0) {
            setSelectedTab(undefined);
        }
    }, [openedTabs]);

    const toggleMenuHandler = () => {
        setMenuVisible(prevMenuVisible => {
            return !prevMenuVisible;
        })
    }

    const {query} = useRouter()

    return (
        <HydrationProvider>
        <div className={classes.Collection}>
            <CollectionSidebar onClick={toggleMenuHandler} />
            <CollectionMenuPane visible={menuVisible} clickOnFile={clickOnFile} rootNode={rootNode} tree={tree} />
            <CollectionEditorPane
                openedTabsContent={openedTabsContent}
                selectTab={selectTabHandler}
                closeTab={closeTabHandler}
                openedTabs={openedTabs}
                onContentChange={onContentChange}
                selectedTab={selectedTab} />
        </div>
        </HydrationProvider>
    );
};

export default CollectionPage;