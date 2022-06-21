import React from 'react';
import Footer from "./footer/footer.jsx";
import Login from "./login/login.jsx";
import Mainpage from "./mainpage/mainpage.jsx";
import Navbar from "./navbar/navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPages } from './mainpage/product.jsx';
import Sale from './sale/sale.jsx';
import Child from './producttypepages/Child.jsx';
import Culture from './producttypepages/culture.jsx';
import History from './producttypepages/history.jsx';
import Literature from './producttypepages/literature.jsx';
import Psychology from './producttypepages/psychology.jsx';
import Philosophy from './producttypepages/philosophy.jsx';
import Selfİmprovement from './producttypepages/self-improvement.jsx';
import LawBook from './producttypepages/law-book.jsx';
import MySales from './profile/mysales.jsx';
import MyProfile from './profile/myprofile.jsx';
import ChangeData from './profile/changedata.jsx';
import Messages from './messages/message.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><Navbar /><Mainpage /><Footer /> </div>} />
                <Route path="/register" element={<div><Navbar /><Login /><Footer /> </div>} />
                <Route path="/product" element={<div><Navbar /> <ProductPages /> <Footer /></div>} />
                <Route path="/sale" element={<div><Navbar /><Sale /><Footer /></div>} />
                <Route path="/child" element={<div><Navbar /><Child /><Footer /></div>} />
                <Route path="/culture" element={<div><Navbar /><Culture /><Footer /></div>} />
                <Route path="/history" element={<div><Navbar /><History /><Footer /></div>} />
                <Route path="/literature" element={<div><Navbar /><Literature /><Footer /></div>} />
                <Route path="/philosophy" element={<div><Navbar /><Philosophy /><Footer /></div>} />
                <Route path="/psychology" element={<div><Navbar /><Psychology /><Footer /></div>} />
                <Route path="/self-improvement" element={<div><Navbar /><Selfİmprovement /><Footer /></div>} />
                <Route path="/law-book" element={<div><Navbar /><LawBook /><Footer /></div>} />
                <Route path="/mysales" element={<div><Navbar /><MySales /><Footer /></div>} />
                <Route path="/profile" element={<div><Navbar /><MyProfile /><Footer /></div>} />
                <Route path="/profile/data" element={<div><Navbar /><ChangeData /><Footer /></div>} />
                <Route path="/messages" element={<div><Navbar /><Messages /><Footer /></div>} />
            </Routes>
        </Router>
    );

}
export default App;