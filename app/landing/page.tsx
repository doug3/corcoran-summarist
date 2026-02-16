'use client'

import React from "react";
import { useRouter } from "next/navigation";
import LoggedOut from "../loggedout/page";

const Landing = () => {
    const loggedIn = true; // Replace with actual authentication logic
    ; // Replace with actual authentication logic
    const router = useRouter();

    React.useEffect(() => {
        if (loggedIn) {
            router.push('/loggedIn/for-you');
        }
    }, [loggedIn, router]);

    return (
        <div>
            {!loggedIn ? <LoggedOut /> : <div>Redirecting...</div>}
        </div>
    );
}

export default Landing;