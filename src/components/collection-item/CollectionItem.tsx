import React from 'react';
import {ICollectionItemProps} from "@/components/collection-item/interface";
import Link from "next/link";
import classes from "./style.module.css";

const CollectionItem: React.FC<ICollectionItemProps> = (props: ICollectionItemProps) => {
    return (
        <div className={classes.CollectionItem}>
            <div className={classes.Description}>
                {props.description}
            </div>
            <div className={classes.Title}>
                <Link href={"/collection/sample"}>
                    {props.name}
                </Link>
            </div>
        </div>
    );
};

export default CollectionItem;