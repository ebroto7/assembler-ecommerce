
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";
import { LoginPage } from "../Pages/LoginPage";

import Navbar from "../Components/Navbar";

export function Router(props: any) {
    return (
        <BrowserRouter>
            <Navbar />
           
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage {...props} />} />
                <Route path="/login" element={<CartPage />} />
                <Route path="/cart" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}
