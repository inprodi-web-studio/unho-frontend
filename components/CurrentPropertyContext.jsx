import React, { useEffect, useMemo, useState } from "react";
import { DataProvider, GlobalActionsProvider } from "@plasmicapp/host";

export const CurrentPropertyContext = ({ children }) => {
    const [property, setProperty] = useState({
        uuid : "global",
        name : "Todas las Propiedades"
    });

    useEffect(() => {
        const storedProperty = localStorage.getItem("currentProperty");

        if ( storedProperty ) {
            setProperty(JSON.parse(storedProperty));
        } else {
            setProperty({
                uuid : "global",
                name : "Todas las Propiedades"
            });
        }
    }, []);

    const actions = useMemo(() => ({
        setProperty : (property) => {
            setProperty(property);
            localStorage.setItem("currentProperty", JSON.stringify(property));
        },
    }), []);

    return (
        <GlobalActionsProvider contextName="CurrentPropertyContext" actions={actions}>
            <DataProvider name="currentProperty" data={property}>
                {children}
            </DataProvider>
        </GlobalActionsProvider>
    );
}