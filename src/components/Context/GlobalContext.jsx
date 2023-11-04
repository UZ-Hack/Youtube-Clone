import { createContext, useState, useRef } from "react";

export const ContextProvider = createContext();

// eslint-disable-next-line react/prop-types
export function GlobalContext ({ children }) {
    const [mode, setMode] = useState(false)
    const [closeSidebar, setCloseSidebar] = useState(false)
    const [searchDataLoad, setSearchDataLoad] = useState(false);
    
    const query = useRef(null)

    return (
        <ContextProvider.Provider value={{mode, setMode, closeSidebar, setCloseSidebar, query, searchDataLoad, setSearchDataLoad}}>
            {children}
        </ContextProvider.Provider>
    )
}