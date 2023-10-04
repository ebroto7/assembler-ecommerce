
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";
import { LoginPage } from "../Pages/LoginPage";
import { SignUpPage } from "../Pages/SignUpPage";

import { BookProvider } from "../context/BookContext";
import DetailPage from "../Pages/DetailPage";

export function Router() {
    return (
        <BookProvider >
            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product">
                        <Route path=":isbn" element={<DetailPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </BookProvider>
       
    );
}
