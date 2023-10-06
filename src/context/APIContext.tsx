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


export type ApiBookStateProps = {
   apiBooks: BookType[];
}

export const APIcontext = createContext<ApiBookStateProps>({
   apiBooks: []
})

const APIbooksProvider: FC<PropsWithChildren> = ({ children }) => {

   const [apiBooks, setApiBooks] = useState<BookType[]>([])

   useEffect(() => {

   const url = 'http://localhost:3000/books'
   const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log("json data= " + data)
      setApiBooks(data)
   }
   getProducts();
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