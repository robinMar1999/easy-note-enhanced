import {staticContent} from "@/static/staticContent";
import React, {useState} from "react";
import {getPublicPosts} from "@/faker/getPublicPosts";
import {INoteProps} from "@/components/note";
import HydrationProvider from "@/components/utils/HydrationProvider";
import {NotesList} from "@/components/note";

export default function HomePage() {
    const [posts, setPosts] =
        useState<INoteProps[]>(() => getPublicPosts())

    return (
        <HydrationProvider>
            <div>
                <h1>{staticContent.home.hero.title}</h1>
                <NotesList notes={posts}/>
            </div>
        </HydrationProvider>
    )
}
