import {FC, PropsWithChildren} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext/authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoutes: FC<PropsWithChildren> = ({ children }) => {

const {authState} = useContext(AuthContext)
    console.log(authState.isLogged)
    
  return authState.isLogged ? children : <Navigate to={"/login"} />
}

export default PrivateRoutes