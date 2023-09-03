import React from 'react';
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {TRANSFORMERS} from "@lexical/markdown";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import classes from "./style.module.css"
import {MarkdownShortcutPlugin} from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {AutoLinkPlugin} from "@lexical/react/LexicalAutoLinkPlugin";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import {CheckListPlugin} from "@lexical/react/LexicalCheckListPlugin";
import LexicalClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import {TabIndentationPlugin} from "@lexical/react/LexicalTabIndentationPlugin";
import CodeHighlightPlugin from "@/components/rich-text-editor/plugins/CodeHighlightPlugin";
import {IRichTextEditorProps} from "@/components/rich-text-editor/interface";
import {ClearEditorPlugin} from "@lexical/react/LexicalClearEditorPlugin";
import {MATCHERS} from "@/components/rich-text-editor/constants";
import {initialConfig} from "@/components/rich-text-editor/config";
import {ToggleEditPlugin} from "@/components/rich-text-editor/plugins/ToggleEditPlugin";
import {BannerPlugin} from "@/components/rich-text-editor/plugins/BannerPlugin";


const RichTextEditor: React.FC<IRichTextEditorProps> = () => {
    return (
        <div className={classes.EditorWrapper}>
        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable className={classes.ContentEditable}/>}
                placeholder={null}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
            <AutoLinkPlugin matchers={MATCHERS}/>
            <CheckListPlugin/>
            <CodeHighlightPlugin/>
            <ListPlugin/>
            <HistoryPlugin/>
            <BannerPlugin />
            <ClearEditorPlugin/>
            <LexicalClickableLinkPlugin/>
            <ToggleEditPlugin/>
            <OnChangePlugin onChange={(editorState) => console.log(editorState)}/>
            <TabIndentationPlugin/>
        </LexicalComposer>
        </div>
    );
};

export default RichTextEditor;