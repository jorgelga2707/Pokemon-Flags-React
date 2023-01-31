import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/pokemon"
import Header from "../header"
import Flags from "../../pages/flags"
import Detail from "../../pages/Detail"
import ImageSearch from "../../pages/ImageSearch"

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Home />} />
                <Route path="/flags" element={<Flags />} />
                <Route path="/flags/detail/:name" element={<Detail />} />
                <Route path="/image/search" element={<ImageSearch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router