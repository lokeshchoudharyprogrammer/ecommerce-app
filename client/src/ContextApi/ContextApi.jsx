import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()


// export const useAuth = useContext(AuthContext)
export const ContextApiProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })
    useEffect(() => {
        const data = sessionStorage.getItem("auth")
        if (data) {
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )



}
