import {
   FC,
   PropsWithChildren,
   createContext,
   useEffect,
   useReducer,
   useContext,
   useState
} from "react";

import { BookType } from "../Types/book";

export interface CartBookType {
   book: BookType
   isbn: string
   units: number
}


const initialArgs: CartBookType[] = []


enum Actions {
   AddBook = "AddBook",
   RemoveBook = "RemoveBook",
   sumUnits = "SumUnits",
   restUnits = "restUnits",
   removeAll = "removeAll"
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
interface sumUnits {
   type: Actions.sumUnits,
   payload: {
      book: BookType,
      isbn: string,
      units: number
   }
}
interface restUnits {
   type: Actions.restUnits,
   payload: {
      book: BookType,
      isbn: string,
      units: number
   }
}
interface removeAll {
   type: Actions.removeAll,
  
}
type Action = AddBook | RemoveBook | sumUnits | restUnits | removeAll


const  bookReducer = (bookList: CartBookType[], action: Action) => {
   switch (action.type) {
      case Actions.AddBook: {
      
         const isOnCart = bookList.find(
            (cartBook) => cartBook.isbn === action.payload.isbn
         )
         if (isOnCart) {
            isOnCart.units += 1
            console.log("bookcontext increase unit ", isOnCart.units)
               
         }
         if (!isOnCart) {
           
            // const addedBook = {
            //    book: action.payload.book,
            //    isbn: action.payload.isbn,
            //    units: 1,
            // }
            console.log("bookcontext add book", bookList)

            localStorage.setItem("books", JSON.stringify(bookList));
            return [...bookList, action.payload]

         }
         return [...bookList]
      }

      case Actions.restUnits: {
         const isOnCart = bookList.find(
            (cartBook) => cartBook.isbn === action.payload.isbn
         )
         if (isOnCart && isOnCart.units > 0) {
            isOnCart.units -= 1
            action.payload
            console.log("bookcontext rest unit ", isOnCart.units)
            localStorage.setItem("books", JSON.stringify(bookList));
         }
         return [...bookList]
      }

      case Actions.RemoveBook: {
         const isOnCart = bookList.findIndex(
            (cartBook) => cartBook.isbn === action.payload.isbn
         )
         bookList.splice(isOnCart, 1)
         localStorage.setItem("books", JSON.stringify(bookList));
         console.log("bookcontext remove book ", bookList)

         return [...bookList]
      }

      case Actions.removeAll: {
            localStorage.removeItem("books")

            return [...bookList]
      }
      default:
         return [...bookList];
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
   removeFromCart: (book: BookType) => void;
   restBookUnits: (book: BookType) => void;
   removeAll: (book: BookType) => void;
   totalPrice: number
   numberBooksOnCart: number
}

export const CartContext = createContext<BookStateProps>({
   cartItems: [],
   handleAddBook: () => { },
   removeFromCart: () => { },
   restBookUnits: () => { },
   removeAll: () => { },
   totalPrice: 0,
   numberBooksOnCart: 0
})


const BookProvider: FC<PropsWithChildren> = ({ children }) => {

   const [totalPrice, setTotalPrice] = useState<number>(0)
   const [numberBooksOnCart, setNumberBooksOnCart] = useState<number>(0)

   const [cartItems, dispatch] = useReducer(bookReducer, {}, init);


   const calculatedTotal = () => {
      let calculatedPrice = totalPrice
      let numberBooks = numberBooksOnCart
      cartItems.map((book) => {
         calculatedPrice += (book.units * book.book.price)
         numberBooks += book.units
      })
      setTotalPrice(calculatedPrice)
      console.log("bookcontext calculated totatlprice ", calculatedPrice)

      setNumberBooksOnCart(numberBooks)
      console.log("bookcontext calculated numberBooks ", numberBooks)
   }

   useEffect(() => {
      localStorage.setItem("books", JSON.stringify(cartItems));
      calculatedTotal()
      console.log("bookcontext useefect")
   }, [cartItems]);


   const handleAddBook = (book: BookType) => {
      console.log("añado el libro ")

      dispatch({
         type: Actions.AddBook,
         payload: {
            book,
            isbn: book.isbn,
            units: 1
         },
      });
   };
   const removeFromCart = (book: BookType) => {
      dispatch({
         type: Actions.RemoveBook,
         payload: {
            book,
            isbn: book.isbn,
            units: 0
         }
      });
   };
   const restBookUnits = (book: BookType) => {
      dispatch({
         type: Actions.restUnits,
         payload: {
            book,
            isbn: book.isbn,
            units: 1
         }
      })
   }
   const removeAll = () => {
      dispatch({
         type: Actions.removeAll,
      })
   }

   return (
      <CartContext.Provider
         value={{ cartItems, handleAddBook, removeFromCart, restBookUnits, removeAll, totalPrice, numberBooksOnCart }}
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