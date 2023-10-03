import { FC, PropsWithChildren, createContext, useReducer } from "react";
import booksList from "../Assets/db/db";
import { BookType } from "../Types/book";

export type cartBook = {
    book: BookType
    units: number
}


export const CartContext = createContext(undefined)

export const BookProvider: FC<PropsWithChildren> = ({children}) => {
     
      const cartItems: cartBook[] = [
         {
            book: booksList[5],
            units: 1,
         },
         {
            book: booksList[8],
            units: 1
         },        
         {
            book: booksList[1],
            units: 1
         }
      ]

    return (
        <CartContext.Provider value={{cartItems}} >
              {children}
        </CartContext.Provider>
    )
}