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
import CarModelList from "./componants/admin/CarModelList";
import AddRegistrations from "./componants/admin/AddRegistrations";
import UserDashboard from "./componants/admin/Dashboard/UserDashboard";
import AdminDahsboard from "./componants/admin/AdminDahsboard";
import MakePayment from "./componants/MakePayment";
import PaymentDetails from "./componants/PaymentDetails";
import ProfileCard from "./componants/ProfileCard";
import RequestForRegistration from "./componants/RequestForRegistration";


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
          <Route path="/auctionlist" element={<ListingService />} />
          {/* <Route path="/auction" element={<Auction />} /> */}
          <Route path="/salecalendar" element={<SaleCalendar />} />
          <Route path="/excel" element={<ExcelData />} />
          <Route path="/car" element={<CarModelList />} />
          <Route path="/auction/:userId" element={<Auction />} />
          <Route path="/addRegistration" element={<AddRegistrations />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/make-payment" element={<MakePayment />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/profile-details" element={<ProfileCard />} />
          <Route path="/requestForRegister" element={<RequestForRegistration />} />




        </Routes>

        <Footer1 />
      </div>
    </>
  );
};
export default App;
