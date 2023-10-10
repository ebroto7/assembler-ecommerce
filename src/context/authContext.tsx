import { FC, 
    PropsWithChildren,
    createContext, 
    useCallback, 
    useMemo, 
    useState 
    } from "react";


const userLocalStorageKey = 'userLogin'

export const AuthContext = createContext({})


const AuthContextProvider: FC<PropsWithChildren>  = ({ children }) => {
    console.log(localStorage.getItem(userLocalStorageKey))
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        (localStorage.getItem(userLocalStorageKey) === null) ? false : true
    )

    const login = useCallback(function (user: string, password: string) {
        const newUser = {
            user: user,
            password: password
        }
        console.log("authcontext loginCallbak")
        localStorage.setItem(userLocalStorageKey, JSON.stringify(newUser))
        setIsAuthenticated(true)
    }, [])

    const logout = useCallback(function () {
        localStorage.removeItem(userLocalStorageKey)
        setIsAuthenticated(false)
    }, [])

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }), [login, logout, isAuthenticated])


    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )

}


export { AuthContextProvider }