import React from 'react';
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import classes from "./Navbar.module.css";
import {staticContent} from "@/static/staticContent";

const Navbar = () => {
    const {isLoggedIn} = useAuth();

    const {navbar} = staticContent
    return (
        <nav className={classes.Navbar}>
            <Link href={navbar.link.home} className={classes.NavLink}>
                <span>
                    {navbar.text.home}
                </span>
            </Link>
            {isLoggedIn && <Link href={navbar.link.myCollections} className={classes.NavLink}>
                <span>
                    {navbar.text.myCollections}
                </span>
            </Link>}
            {isLoggedIn && <Link href={navbar.link.signOut} className={classes.NavLink}>
                <span>{navbar.text.signOut}</span>
            </Link>}
            {!isLoggedIn && <>
                <Link href={navbar.link.signIn} className={classes.NavLink}>
                    <span>{navbar.text.signIn}</span>
                </Link>
                <Link href={navbar.link.signUp} className={classes.NavLink}>
                    <span>{navbar.text.signUp}</span>
                </Link>
            </>}
        </nav>
    );
};

export default Navbar;