// import { useState } from "react";

import {
   FC,
   createContext,
   useState,
   PropsWithChildren,
   useContext,
   useEffect
} from "react"
import { BookType } from "../Types/book"
import axios from 'axios';



export type ApiBookStateProps = {
   apiBooks: BookType[];
   apiError: boolean
}

export const APIcontext = createContext<ApiBookStateProps>({
   apiBooks: [],
   apiError: true
})

const APIbooksProvider: FC<PropsWithChildren> = ({ children }) => {
   const url = import.meta.env.VITE_API_BASE_URL
   const [apiBooks, setApiBooks] = useState<BookType[]>([])
   const [apiError, setApiError] = useState<boolean>(true)
   

   useEffect(() => {
         const getProducts = async () => {
            try {
               const response = await axios.get(url);
            //   const response = await axios.get("https://www.developerway.com/posts/how-to-handle-errors-in-react");
              setApiBooks(response.data);

              setApiError(false)

            } catch (error) {
              setApiError(true)
            }
         }
         getProducts()
   }, []);

   return (
      <APIcontext.Provider
         value={{ apiBooks, apiError }}
      >
         {children}
      </APIcontext.Provider>)
}


function apiContext() {
   const context = useContext(APIcontext);
   if (context === undefined || context === null) {
      throw new Error("Function not implemented.");
   }
   return context;
}

export { APIbooksProvider, apiContext }