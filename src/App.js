import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componants/Home";
import About from "./componants/About";
import Services from "./componants/Services";
import Footer1 from "./Common/Footer1";
import Contact from "./componants/Contact";
import BitPage from "./componants/BitPage";
import Navbar from "./Common/Navbar";
import ListingService from "./componants/ListingService";
import Auction from "./componants/Auction";
import SaleCalendar from "./componants/SaleCalendar";
import ExcelData from "./componants/ExcelData";



const App = () => {
  return (
    <>
      <div>  
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bitpage" element={<BitPage />} />
          <Route path="/listingService" element={<ListingService />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/salecalendar" element={<SaleCalendar />} />
          <Route path="/excel" element={<ExcelData/>}/>
        </Routes>

        <Footer1 />
      </div>
    </>
  );
};
export default App;
