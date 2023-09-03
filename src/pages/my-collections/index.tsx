import React from 'react';
import HydrationProvider from "@/components/utils/HydrationProvider";
import CollectionItemsList from "@/components/collection-item/CollectionItemsList";
import {getCollections} from "@/faker/getCollections";
import {ICollectionItemProps} from "@/components/collection-item";

const MyCollectionsPage = () => {
    const items: ICollectionItemProps[] = getCollections();
    return (
        <HydrationProvider>
            <div>
                <h1>My Notes Collections</h1>
                <CollectionItemsList items={items} />
            </div>
        </HydrationProvider>

    );
};

export default MyCollectionsPage;