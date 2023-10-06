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


const initialArgs: CartBookType[] = [
   // {
   //    book: booksList[5],
   //    isbn: booksList[5].isbn,
   //    units: 1,
   // },
   // {
   //    book: booksList[8],
   //    isbn: booksList[8].isbn,
   //    units: 1
   // },        
   // {
   //    book: booksList[1],
   //    isbn: booksList[1].isbn,
   //    units: 1
   // }
]


enum Actions {
   AddBook = "AddBook",
   RemoveBook = "RemoveBook",
   sumUnits = "SumUnits",
   restUnits = "restUnits",
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
type Action = AddBook | RemoveBook | sumUnits | restUnits


function bookReducer(bookList: CartBookType[], action: Action) {

   switch (action.type) {
      case Actions.AddBook: {
         console.log("entro en add book")
         const isOnCart = bookList.find(
            (cartBook) => cartBook.isbn === action.payload.isbn
         )
         if (isOnCart) {
            isOnCart.units += 1
            console.log("bookReducerfunc add books change, units: "+isOnCart.units)
         }
         if (!isOnCart) {
            bookList.push({
               book: action.payload.book,
               isbn: action.payload.isbn,
               units: 1,
            })
         }
         return bookList
      }

      case Actions.restUnits: {
         console.log("entro en rest unit book")
         const isOnCart = bookList.find(
            (cartBook) => cartBook.isbn === action.payload.isbn
         )
         if (isOnCart && isOnCart.units > 0) {
            isOnCart.units -= 1
            console.log("bookReducer func rest units, units: "+isOnCart.units)

         }
         return bookList
      }

      case Actions.RemoveBook: {
         console.log("entro en remove book")
         const isOnCart = bookList.findIndex(
            (cartBook) => cartBook.isbn === action.payload.isbn
         )
         console.log("remove book: "+isOnCart+" " +bookList.splice(isOnCart,1))
         return bookList.splice(isOnCart,1)
      }
      default:
         return bookList;
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
   totalPrice: number
   numberBooksOnCart: number
}

export const CartContext = createContext<BookStateProps>({
   cartItems: [],
   handleAddBook: () => { },
   removeFromCart: () => { },
   restBookUnits: () => { },
   totalPrice: 0,
   numberBooksOnCart: 0
})


const BookProvider: FC<PropsWithChildren> = ({ children }) => {

   const [totalPrice, setTotalPrice] = useState<number>(0)
   const [numberBooksOnCart, setNumberBooksOnCart] = useState<number>(0)

   const [cartItems, dispatch] = useReducer(bookReducer, {}, init);

   useEffect(() => {
      localStorage.setItem("books", JSON.stringify(cartItems));
      console.log("local storage set items: ")
   }, [cartItems]);

   useEffect(() => {
      console.log("use efect setTotalPrice + setNumberBooks")

      let calculatePrice = 0
      let numberBooks = 0
      cartItems.map((book) => {
         calculatePrice += (book.units * book.book.price)
         numberBooks += book.units
      })
      setTotalPrice(calculatePrice)
      setNumberBooksOnCart(numberBooks)
      
   }, [cartItems]);


   const handleAddBook = (book: BookType) => {
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



   return (
      <CartContext.Provider
         value={{ cartItems, handleAddBook, removeFromCart, restBookUnits, totalPrice, numberBooksOnCart }}
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