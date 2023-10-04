// import { BookType } from "../Types/book";
// import booksList from "../Assets/db/db";

// export interface cartBookType {
//     book: BookType
//     isbn: string
//     units: number
// }

// export const initialArgs: cartBookType[] =   [{
//        book: booksList[5],
//        isbn: booksList[5].isbn,
//        units: 1,
//      },
//      {
//        book: booksList[8],
//        isbn: booksList[8].isbn,
//        units: 1
//      },        
//      {
//        book: booksList[1],
//        isbn: booksList[1].isbn,
//        units: 1
//      }]

// // union types

// type BookActionType = 
// | { type: 'ADD_BOOK'; payload: BookType }
// | { type: 'REMOVE_BOOK'; payload: string }

// export const bookReducer = (state: typeof initialArgs, action: BookActionType) => {

//   switch(action.type) {
// 		case 'ADD_BOOK':
// 			return [ ...state, action.payload ];
// 		case 'REMOVE_BOOK':
// 			return state.filter((book) => book.book.id !== action.payload )
//     default: return state;
//   }
// }