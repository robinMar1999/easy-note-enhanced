import React from 'react';
import {staticContent} from "@/static/staticContent";
import Head from "next/head";

const Header = () => {
    return (
        <Head>
            <title>{staticContent.app.title}</title>
            <meta name="description" content="Now create notes on web" />
            <meta name="author" content="Aman Kashyap" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default Header;