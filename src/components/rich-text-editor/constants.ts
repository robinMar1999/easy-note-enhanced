import {EditorThemeClasses} from "lexical";
import classes from "@/components/rich-text-editor/style.module.css";

export const theme: EditorThemeClasses = {
    list: {
        listitem: classes.theme__listItem,
        listitemChecked: classes.theme__listItemChecked,
        listitemUnchecked: classes.theme__listItemUnchecked,
        nested: {
            listitem: classes.theme__nestedListItem,
        },
        olDepth: [
            classes.theme__ol1,
            classes.theme__ol2,
            classes.theme__ol3,
            classes.theme__ol4,
            classes.theme__ol5,
        ],
        ul: classes.theme__ul,
    },
    code: classes.theme__code,
    codeHighlight: {
        atrule: classes.theme__tokenAttr,
        attr: classes.theme__tokenAttr,
        boolean: classes.theme__tokenProperty,
        builtin: classes.theme__tokenSelector,
        cdata: classes.theme__tokenComment,
        char: classes.theme__tokenSelector,
        class: classes.theme__tokenFunction,
        'class-name': classes.theme__tokenFunction,
        comment: classes.theme__tokenComment,
        constant: classes.theme__tokenProperty,
        deleted: classes.theme__tokenProperty,
        doctype: classes.theme__tokenComment,
        entity: classes.theme__tokenOperator,
        function: classes.theme__tokenFunction,
        important: classes.theme__tokenVariable,
        inserted: classes.theme__tokenSelector,
        keyword: classes.theme__tokenAttr,
        namespace: classes.theme__tokenVariable,
        number: classes.theme__tokenProperty,
        operator: classes.theme__tokenOperator,
        prolog: classes.theme__tokenComment,
        property: classes.theme__tokenProperty,
        punctuation: classes.theme__tokenPunctuation,
        regex: classes.theme__tokenVariable,
        selector: classes.theme__tokenSelector,
        string: classes.theme__tokenSelector,
        symbol: classes.theme__tokenProperty,
        tag: classes.theme__tokenProperty,
        url: classes.theme__tokenOperator,
        variable: classes.theme__tokenVariable,
    }
}

const URL_MATCHER =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export const MATCHERS = [
    (text: string) => {
        const match = URL_MATCHER.exec(text);
        if (match === null) {
            return null;
        }
        const fullMatch = match[0];
        return {
            index: match.index,
            length: fullMatch.length,
            text: fullMatch,
            url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
            // attributes: { rel: 'noreferrer', target: '_blank' }, // Optional link attributes
        };
    },
];