"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type SessionProps = {
    children: React.ReactNode;
    session: Session | null;
}

export function SessionProvider({children, session}:SessionProps){
    return (
        <Provider>
            {children}
        </Provider>
    )
}