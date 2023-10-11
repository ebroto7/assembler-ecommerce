import {
    FC,
    PropsWithChildren,
    createContext,
    useReducer
} from "react";

export type userLogedType = {
    user: string,
    password: string
}

const initialArgs: boolean = false


enum AuthActionTypes {
    login = 'LOG_IN',
    logout = 'LOG_OUT'
}
interface Login {
    type: AuthActionTypes.login,
    payload: {
        user: string,
        password: string
    }
}
interface Logout {
    type: AuthActionTypes.logout,
    payload: {
        user: string,
        password: string
    }
}
type AuthAction = Login | Logout

export type AuthStateProps = {
    authState: boolean,
    loginContext: () => void,
    logout: () => void,
}
export const AuthContext = createContext<AuthStateProps>({
    authState: false,
    loginContext: () => {},
    logout: () => {},
});

const authReducer = (state: userLogedType, action: AuthAction) => {

    switch (action.type) {
        case AuthActionTypes.login:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        case AuthActionTypes.logout:
            return {
                isLogged: false,
            }
        default: state;
    }
}

const init = () => {
    const user: userLogedType = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        return initialArgs
    }
    return true
}

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    console.log(authState)

    const loginContext = (newUser: userLogedType) => {
        console.log("AuthContext",newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
        dispatch({
            type: AuthActionTypes.login,
            payload: newUser
        })
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({
            type: AuthActionTypes.logout
        })

    }

    return <AuthContext.Provider
        value={{ ...authState, loginContext: loginContext, logout: logout }}
    >
        {children}
    </AuthContext.Provider>

}


export default AuthProvider;
