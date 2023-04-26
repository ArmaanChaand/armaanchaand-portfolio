import { createContext, useState, useEffect } from "react";

const AnimContext = createContext({});

export function AnimProvider({children}){
    const [moonLoading, setMoonLoading] = useState(true);
    const [showGreet, setShowGreet] = useState(false);
    const [showPro, setShowPro] = useState(false);
    const [showDescr, setShowDescr] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const [showSocial, setShowSocial] = useState(false);


    return(
        <AnimContext.Provider value={{
                moonLoading, setMoonLoading, showGreet, setShowGreet, showPro, setShowPro,
                showDescr, setShowDescr, showBtn, setShowBtn, showHeader, setShowHeader,
                showSocial, setShowSocial
        }}>
            {children}
        </AnimContext.Provider>
    )

}

export default AnimContext;