import { FC, 
    PropsWithChildren,
    createContext, 
    useContext, 
    useCallback, 
    useMemo, 
    useState 
    } from "react";


const userLocalStorageKey = 'userLogin'

export type userLoginStateProps = {
    isAuthenticated: boolean
}

export const AuthContext = createContext<userLoginStateProps>({
    isAuthenticated: false
})


const AuthContextProvider: FC<PropsWithChildren>  = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        // localStorage.getItem(userLocalStorageKey) ?? false
        (!localStorage.getItem(userLocalStorageKey)) ?? true
    )

    const login = useCallback(function (user: string, password: string) {
        const newUser = {
            user: user,
            password: password
        }
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

function userContext() {
    const context = useContext(AuthContext);
    if (context === undefined || context === null) {
       throw new Error("Function not implemented.");
    }
    return context;
 }

export { AuthContextProvider, userContext }