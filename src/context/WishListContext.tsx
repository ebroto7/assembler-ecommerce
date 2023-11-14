import {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useReducer
} from "react";
import { BookType } from "../Types/book";


export interface WishListItem {
    book: BookType
}

const initialArgs: WishListItem[] = []

enum Actions {
    AddBook = "AddBook",
    RemoveBook = "RemoveBook",
}
interface AddBook {
    type: Actions.AddBook,
    payload: {
        book: BookType,
    }
}
interface RemoveBook {
    type: Actions.RemoveBook,
    payload: {
        book: BookType,
    }
}
type Action = AddBook | RemoveBook

const wishListReducer = (bookList: WishListItem[], action: Action) => {
    switch (action.type) {
        case Actions.AddBook: {
            const newWishList = [...bookList, action.payload]
            localStorage.setItem("wishList", JSON.stringify(newWishList));
            console.log("wishlistcontext add book ", newWishList)

            return newWishList
        }

        case Actions.RemoveBook: {
            console.log("wishlistcontext => ", bookList)
            console.log("action.payload => ", action.payload)
            const isOnCart = bookList.findIndex(
                (wishBook) => wishBook.book.isbn === action.payload.book.isbn
            )
            bookList.splice(isOnCart, 1)
            localStorage.setItem("wishList", JSON.stringify(bookList));
            return bookList
        }

        default:
            return bookList;

    }
}


const init = () => {
    const storedData = localStorage.getItem("wishList");
    if (storedData !== null) {
        return JSON.parse(storedData);
    }
    return initialArgs;
};

export type WishListStateProps = {
    wishList: WishListItem[];
    addToWishList: (book: BookType) => void;
    removeFromWishList: (book: BookType) => void;
}

export const WishListContext = createContext<WishListStateProps>({
    wishList: [],
    addToWishList: () => { },
    removeFromWishList: () => { },
})


const WishListProvider: FC<PropsWithChildren> = ({ children }) => {

    const [wishList, dispatch] = useReducer(wishListReducer, {}, init);

    const addToWishList = (book: BookType) => {
        console.log("añado el libro al wwishlist ")
        dispatch({
            type: Actions.AddBook,
            payload: {
                book
            }
        })
    }
    const removeFromWishList = (book: BookType) => {
        console.log("quito el libro de wishlist ")
        dispatch({
            type: Actions.RemoveBook,
            payload: {
                book
            }
        })
    }


    return (
        <WishListContext.Provider
            value={{ wishList, addToWishList, removeFromWishList }}
        >
            {children}
        </WishListContext.Provider>
    )

}


function wishListContext() {
    const context = useContext(WishListContext);
    if (context === undefined || context === null) {
        throw new Error("Function not implemented.");
    }
    return context;
}

export { WishListProvider, wishListContext };