import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
// import Route from "./components/Route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div>

            <BrowserRouter>

                <Header />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>

            </BrowserRouter>

            {/* <Header /> */}
            {/* <Route path='/'>
                <Main />
            </Route>

            <Route path='/gallery'>
                <Gallery />
            </Route> */}

            <Footer />
        </div>
    )
}

export default App