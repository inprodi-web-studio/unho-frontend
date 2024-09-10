import React, { useEffect, useMemo, useState } from "react";
import { DataProvider, GlobalActionsProvider } from "@plasmicapp/host";

export const AuthGlobalContext = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser  = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(storedUser ? JSON.parse(storedUser) : {});
        } else {
            setToken(null);
            setUser(null);
        }

        setLoading(false);
    }, []);

    const actions = useMemo(() => ({
        login: (token, user) => {
            setToken(token);
            setUser(user);
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        },
        update: (user) => {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout: () => {
            setToken(null);
            setUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("currentApp");
            localStorage.removeItem("fields");
        },
    }), []);

    if (loading) {
        return null;
    }

    return (
        <GlobalActionsProvider contextName="AuthGlobalContext" actions={actions}>
            <DataProvider name="token" data={token}>
                <DataProvider name="user" data={user}>
                    {children}
                </DataProvider>
            </DataProvider>
        </GlobalActionsProvider>
    );
};