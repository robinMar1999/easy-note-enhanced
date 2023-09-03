import {faker} from "@faker-js/faker";
import {INoteProps} from "@/components/note/interface";

export const getPublicPosts = (): INoteProps[] => {
    const posts: INoteProps[] = []
    for(let i=0;i<10;i++) {
        posts.push(getSinglePost())
    }
    return posts;
}

export const getSinglePost = (): INoteProps => {
    return {
        name: faker.person.firstName(),
        content: faker.lorem.paragraph(2),
        creationTime: faker.date.anytime(),
        id: faker.database.mongodbObjectId()
    }
}