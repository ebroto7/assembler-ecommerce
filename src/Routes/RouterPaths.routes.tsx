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
import AuthProvider from "../context/authContext/authContext";
import SearchPage from "../Pages/SearchPage";
import { CART, CHECKOUT, DETAIL, HOME, LOGIN, LOGOUT, PRIVATE, PRODUCT, SEARCH, SIGNUP } from "./paths";

export function Router() {
    return (
        <AuthProvider >
            <APIbooksProvider>
                <BookProvider>

                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"}>
                                <Route index element={<LandingPage />} />
                                <Route path={HOME} element={<HomePage />} />
                                <Route path={LOGIN} element={<LoginPage />} />
                                <Route path={SIGNUP} element={<SignUpPage />} />
                                <Route path={CART} element={<CartPage />} />
                                <Route path={SEARCH} element={<SearchPage />} />
                                <Route path={PRODUCT}>
                                    <Route path={DETAIL} element={<DetailPage />} />
                                </Route>
                            </Route>

                            <Route path={PRIVATE}>
                                <Route path={CHECKOUT} element={<CheckoutPage />} />
                                <Route path={LOGOUT} element={<Logout />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>

                </BookProvider>
            </APIbooksProvider>
        </AuthProvider>

    );
}
