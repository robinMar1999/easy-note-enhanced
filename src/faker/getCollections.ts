import {faker} from "@faker-js/faker";
import {ICollectionItemProps} from "@/components/collection-item";

export const getCollections = (): ICollectionItemProps[] => {
    const collections = []
    for(let i=0;i<10;i++) {
        collections.push(getCollection())
    }
    return collections;
}

export const getCollection = (): ICollectionItemProps => {
    return {
        name: faker.word.noun(),
        id: faker.database.mongodbObjectId(),
        description: faker.lorem.paragraph(2)
    }
}