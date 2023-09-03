import {
    $getSelection,
    $isRangeSelection,
    COMMAND_PRIORITY_LOW,
    createCommand,
    EditorConfig,
    ElementNode,
    LexicalEditor,
    LexicalNode
} from "lexical";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$setBlocksType} from "@lexical/selection";

export class BannerNode extends ElementNode {

    // constructor(key?: NodeKey) {
    //     super(key);
    // }

    static getType(): string {
        return "banner-node"
    }

    static clone(node: BannerNode): BannerNode {
        return new BannerNode(node.__key);
    }

    createDOM(_config: EditorConfig, _editor: LexicalEditor): HTMLElement {
        const element = document.createElement("div");
        element.className = _config.theme.banner;
        return element;
    }
}

export function $createBannerNode(): BannerNode {
    return new BannerNode();
}

export function $isBannerNode(node: LexicalNode): node is BannerNode {
    return node instanceof BannerNode
}

export const INSERT_BANNER_COMMAND = createCommand("insertBanner")

export function BannerPlugin(): null {
    const [editor] = useLexicalComposerContext()
    if(!editor.hasNodes([BannerNode])) {
        throw new Error("BannerPlugin: BannerNode not registered on editor");
    }
    editor.registerCommand(INSERT_BANNER_COMMAND, () => {
        const selection = $getSelection()
        if($isRangeSelection(selection)) {
            $setBlocksType(selection, $createBannerNode)
        }
        return true;
    }, COMMAND_PRIORITY_LOW)
    return null;
}