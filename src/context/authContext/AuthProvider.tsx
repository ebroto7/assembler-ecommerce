// import { useReducer } from "react";
// authsta



// const init = () => {
//     const user: userLogedType = JSON.parse(localStorage.getItem('user'));
//     if (!user) {
//         return initialArgs
//     }
//     return true
// }

// const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

//     const [authState, dispatch] = useReducer(authReducer, {}, init)

//     console.log(authState)

//     const loginContext = (newUser: userLogedType) => {
//         console.log("AuthContext",newUser)
//         localStorage.setItem('user', JSON.stringify(newUser))
//         dispatch({
//             type: AuthActionTypes.login,
//             payload: newUser
//         })
//     }

//     const logout = () => {
//         localStorage.removeItem('user')
//         dispatch({
//             type: AuthActionTypes.logout
//         })

//     }

//     return <AuthContext.Provider
//         value={{ ...authState, loginContext: loginContext, logout: logout }}
//     >
//         {children}
//     </AuthContext.Provider>

// }
