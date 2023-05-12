import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Last from "./pages/Last";
import Services from "./pages/Services";
import Filter from "./pages/Filter";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="about-us" element={<AboutUs />} />
                <Route path="last/*" element={<Last />} />
                <Route path="services" element={<Services />} />
                <Route path="wrapper" element={<Filter />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default App;
