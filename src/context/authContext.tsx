import {
    FC,
    PropsWithChildren,
    createContext,
    useCallback,
    useMemo,
    useState,
    useContext
} from "react";


const userLocalStorageKey = 'userLogin'

export const AuthContext = createContext({})

export type userLogedType = {
    user: string,
    password: string
}

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
    console.log(localStorage.getItem(userLocalStorageKey))
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>( 
        (localStorage.getItem(userLocalStorageKey) === null) ? false : true
    )


    const login = useCallback(function (newUser: userLogedType) {
        window.localStorage.setItem(userLocalStorageKey, JSON.stringify(newUser))
        setIsAuthenticated(true);
      }, []);

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

function useAuthContext() {
    return useContext(AuthContext);
  }

export { AuthContextProvider, useAuthContext}