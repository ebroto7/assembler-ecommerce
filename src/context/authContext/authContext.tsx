import {
    FC,
    PropsWithChildren,
    createContext,
    useReducer
} from "react";

export type UserType = {
    userName: string,
    password: string
}
export type LogedType = {
    user: UserType,
    isLogged: boolean
}

const initialArgs: LogedType = {
    user: { userName: "", password: "" },
    isLogged: false
}


enum AuthActionTypes {
    login = 'LOG_IN',
    logout = 'LOG_OUT'
}
interface Login {
    type: AuthActionTypes.login,
    payload: {
        user: UserType,
        isLogged: boolean
    }
}
interface Logout {
    type: AuthActionTypes.logout,
    payload: {
        user: UserType,
        isLogged: boolean
    }
}
type AuthAction = Login | Logout

export type AuthStateProps = {
    authState: LogedType,
    loginContext: (user: LogedType) => void,
    logout: () => void,
}
export const AuthContext = createContext<AuthStateProps>({
    authState: initialArgs,
    loginContext: () => { },
    logout: () => { },
});

const authReducer = (user: LogedType, action: AuthAction) => {

    switch (action.type) {
        case AuthActionTypes.login: {
          
            return action.payload
        }
        case AuthActionTypes.logout: {
              const deletedUser: LogedType = {
                user: {
                    userName: "",
                    password: ""
                },
                isLogged: false
            }
            localStorage.removeItem('user')

            return deletedUser
        }
        default: 
            return user
        
    }
}

const init = () => {
    const userString = localStorage.getItem('user');
    const user: UserType = userString ? JSON.parse(userString) : null;
    console.log("usereducer func init",user)
    const loggedUser: LogedType = {
        user: user,
        isLogged: true
    }
    if (user) return loggedUser;

    return initialArgs
};

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    console.log("authstate", authState)

    const loginContext = (newUser: LogedType) => {
        localStorage.setItem('user', JSON.stringify(newUser))

        dispatch({
            type: AuthActionTypes.login,
            payload: {
                user: newUser.user,
                isLogged: newUser.isLogged,
            }
        })
    }

    const logout = () => {
        console.log("AuthContext logout")

        localStorage.removeItem('user')
        localStorage.removeItem('books')
        dispatch({
            type: AuthActionTypes.logout,
            payload: {
                user: { userName: "", password: "" },
                isLogged: false
            }
        })
    }

    return <AuthContext.Provider
        value={{ authState, loginContext: loginContext, logout: logout }}
    >
        {children}
    </AuthContext.Provider>

}


export default AuthProvider;
