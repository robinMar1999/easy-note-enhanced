import {InitialConfigType} from "@lexical/react/LexicalComposer";
import {LexicalEditor} from "lexical";
import {theme} from "@/components/rich-text-editor/constants";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {ListItemNode, ListNode} from "@lexical/list";
import {HorizontalRuleNode} from "@lexical/react/LexicalHorizontalRuleNode";
import {CodeHighlightNode, CodeNode} from "@lexical/code";
import {AutoLinkNode, LinkNode} from "@lexical/link";
import {BannerNode} from "@/components/rich-text-editor/plugins/BannerPlugin";

export const initialConfig: InitialConfigType = {
    namespace: 'MyEditor',
    onError: (error: Error, editor: LexicalEditor) => {
        console.log(error)
    },
    theme,
    nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        HorizontalRuleNode,
        CodeNode,
        LinkNode,
        QuoteNode,
        AutoLinkNode,
        CodeNode,
        CodeHighlightNode,
        BannerNode
    ]
};