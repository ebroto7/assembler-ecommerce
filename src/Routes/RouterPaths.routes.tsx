import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../Pages/LandingPage";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";
import { LoginPage } from "../Pages/LoginPage";
import { SignUpPage } from "../Pages/SignUpPage";
import DetailPage from "../Pages/DetailPage";
import Logout from "../Pages/LogoutPage";
import CheckoutPage from "../Pages/CheckoutPage";

import { BookProvider } from "../context/BookContext";
import { APIbooksProvider } from "../context/APIContext"
import { AuthContextProvider } from "../context/authContext"
import SearchPage from "../Pages/SearchPage";


export function Router() {
    return (
        <APIbooksProvider>
            <BookProvider>
                <AuthContextProvider>

                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"}>
                                <Route index element={<LandingPage />} />
                                <Route path="/home" element={<HomePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/signup" element={<SignUpPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/product">
                                    <Route path=":isbn" element={<DetailPage />} />
                                </Route>
                            </Route>

                            <Route path={"/private"}>
                                <Route path=":checkout" element={<CheckoutPage />} />
                                <Route path=":logout" element={<Logout />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>

                </AuthContextProvider>
            </BookProvider>
        </APIbooksProvider>
    );
}
