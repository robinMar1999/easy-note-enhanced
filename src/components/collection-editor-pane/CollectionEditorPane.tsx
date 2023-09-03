import React from 'react';
import classes from "./style.module.css";
import RichTextEditor from "@/components/rich-text-editor";
import {ICollectionEditorPaneProps} from "@/components/collection-editor-pane/interface";
import Tabs from "@/components/collection-editor-pane/Tabs";

const CollectionEditorPane: React.FC<ICollectionEditorPaneProps> =
    ({
         openedTabs,
         selectedTab,
        onContentChange,
        openedTabsContent,
     selectTab,
     closeTab}) => {
    return (
        <div className={classes.CollectionEditorPane}>
            <Tabs
                  selectTab={selectTab}
                  closeTab={closeTab}
                  tabs={openedTabs}
                  selectedTab={selectedTab} />
        </div>
    );
};

export default CollectionEditorPane;