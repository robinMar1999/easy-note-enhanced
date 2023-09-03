import React from 'react';
import HydrationProvider from "@/components/utils/HydrationProvider";
import {ICollectionItemsListProps} from "@/components/collection-item/interface";
import classes from "./style.module.css";
import CollectionItem from "@/components/collection-item/CollectionItem";

const CollectionItemsList: React.FC<ICollectionItemsListProps> = (props: ICollectionItemsListProps) => {

    return (
        <div className={classes.CollectionItemsList}>
            {props.items.map(item =>
                <CollectionItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    id={item.id} />)}
        </div>
    );
};

export default CollectionItemsList;