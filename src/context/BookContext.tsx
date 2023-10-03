import { FC, PropsWithChildren, createContext } from "react";
import booksList from "../Assets/db/db";
import { BookType } from "../Types/book";

export interface cartBookType {
    book: BookType
    isbn: string
    units: number
}

export type cartContextType = {
   bookList: cartBookType[]
}

export const CartContext = createContext<cartContextType | null >(null)

export const BookProvider: FC<PropsWithChildren> = ({children}) => {
     
      const cartItems: cartBookType[] = [
         {
            book: booksList[5],
            isbn: booksList[5].isbn,
            units: 1,
         },
         {
            book: booksList[8],
            isbn: booksList[8].isbn,
            units: 1
         },        
         {
            book: booksList[1],
            isbn: booksList[1].isbn,
            units: 1
         }
      ]

    return (
        <CartContext.Provider value={{bookList: cartItems}} >
              {children}
        </CartContext.Provider>
    )
}