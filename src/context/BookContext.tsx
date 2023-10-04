import { FC, 
         PropsWithChildren, 
         createContext, 
         useEffect, 
         useReducer, 
         useContext
       } from "react";

import { BookType } from "../Types/book";
// import { bookReducer, initialArgs } from "./actions";
import booksList from "../Assets/db/db";

export interface CartBookType {
       book: BookType
       isbn: string
       units: number
   }


const initialArgs: CartBookType[] = [
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


enum Actions {
   AddBook = "AddBook",
   RemoveBook = "RemoveBook"
}
interface AddBook {
   type: Actions.AddBook,
   payload: {
      book: BookType,
      isbn: string,
      units: number
   }
}
interface RemoveBook {
   type: Actions.RemoveBook,
   payload: {
      book: BookType,
      isbn: string,
      units: number
   }
}
type Action = AddBook | RemoveBook

function bookReducer(bookList: typeof initialArgs , action: Action) {
      switch (action.type) {
         case Actions.AddBook: {
            bookList.map((book) => {
               if (book.isbn === action.payload.isbn) {
                  return action.payload.units += 1
               } else {
                  return [...bookList, {...action.payload}]
               }
            })
         }


         case Actions.RemoveBook: {
               if (action.payload.units > 1) {
                  return action.payload.units -= 1
               } else {
                  return bookList.filter((book) => book.isbn !== action.payload.isbn )              
               }	
         }

         default: 
            return bookList
      }
}

const init = () => {
	const storedData = localStorage.getItem("books");
	if (storedData !== null) {
		return JSON.parse(storedData);
	}
	return initialArgs;
};

export type BookStateProps = {
   cartItems: CartBookType[];
   handleAddBook: (book: BookType) => void;
   removeFromCart: (isbn: string) => void;
}

export const CartContext = createContext<BookStateProps>({
   cartItems: [],
   handleAddBook: () => {},
   removeFromCart: () => {}
})





const BookProvider: FC<PropsWithChildren> = ({children}) => {
   const [cartItems, dispatch] = useReducer(bookReducer, initialArgs, init);

     
      useEffect(() => {
         localStorage.setItem("books", JSON.stringify(cartItems));
      }, [cartItems]);
     

      const handleAddBook = (book: BookType) => {
         dispatch({
            type: Actions.AddBook,
            payload: book
         })
      }
       const removeFromCart = (isbn: string) => {
         dispatch({
            type: Actions.RemoveBook,
            payload: isbn
         });
      };



      //  function addToCart(book: BookType) {
      //    const updateCartProducts = [...cartItems]
      //    const isOnCart = cartItems.find((cartBook) => cartBook.isbn === book.isbn )

      //    if (isOnCart) {
      //          isOnCart.units += 1
      //    } 
      //    if(!isOnCart) {
      //       cartItems.push({
      //          book: book,
      //          isbn: book.isbn,
      //          units: 1
      //       })
      //    }
      //    setCartItems(updateCartProducts)
      // }
      //  function removeFromCart(book: cartBookType) {
         
      // }


    return (
        <CartContext.Provider 
                     value={{cartItems, handleAddBook, removeFromCart}}
                  >
                     {children}
        </CartContext.Provider>
    )
}


function bookContext() {
	const context = useContext(CartContext);
	if (context === undefined || context === null) {
		throw new Error("Function not implemented.");
	}
	return context;
}

export { BookProvider, bookContext };