import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./about.js";
import FrontPage from "./frontPage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ContactUs from "./contactUs";
import Header from "./Header";
import Footer from "./Footer"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import OurTeam from "./ourTeam";
import PracticeArea from "./PracticeArea";
function App() {
  return (
    <div>
      {/*<FrontPage/>*/}
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<FrontPage/>}></Route>
                    <Route exact path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<ContactUs/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                    <Route path="/SignIn" element={<SignIn/>}></Route>
                    <Route exact path="/ourTeam" element={<OurTeam/>}></Route>
                    <Route exact path="/PracticeAreas" element={<PracticeArea/>}></Route>
                </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
