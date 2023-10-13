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
}

export const APIcontext = createContext<ApiBookStateProps>({
   apiBooks: []
})

const APIbooksProvider: FC<PropsWithChildren> = ({ children }) => {
   const url = import.meta.env.VITE_API_BASE_URL
   const [apiBooks, setApiBooks] = useState<BookType[]>([])

   useEffect(() => {
         const getProducts = async () => {
            try {
              const response = await axios.get(url);
              setApiBooks(response.data);
              console.log(' fetching data:', response.data);

            } catch (error) {
              console.log('Error fetching data:', error);
            }
         }
         getProducts()
   }, []);

   return (
      <APIcontext.Provider
         value={{ apiBooks }}
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