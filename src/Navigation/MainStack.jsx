import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq"; 
import Explore from "../Pages/Explore/Explore"; 
import About from "../Pages/About"; 
import Dashboard from "../Pages/Dashboard"

import Electricity from '../Pages/services/Electricity';
import HomeService from '../Pages/services/HomeService';
import Handcraft from '../Pages/services/Handcraft';
import Plumber from '../Pages/services/Plumber';
import Mechanic from '../Pages/services/Mechanic';
import FreeQuote from "../Pages/services/FreeQuote";

import UpsInstallation from "../Pages/services/Electricity/UpsInstallation";
import GeneralServices from "../Pages/services/Electricity/GeneralServices"
import FanInstallation from "../Pages/services/Electricity/FanInstallation";

import TapInstallation from "../Pages/services/Plumber/TapInstallation";
import TankCleaning from "../Pages/services/Plumber/TankCleaning";
import GeyserInstallation from "../Pages/services/Plumber/GeyserInstallation";

import AcInstallation from "../Pages/services/HomeServices/ACInstall"
import WashingMachine from "../Pages/services/HomeServices/WashingMachine"
import Refrigerator from "../Pages/services/HomeServices/Refrigerator"
import Oven from "../Pages/services/HomeServices/Oven"

import Furniture from "../Pages/services/HandCraft/Furniture";
import Woodwork from "../Pages/services/HandCraft/Woodwork";
import Curtains from "../Pages/services/HandCraft/Curtains";

import OrderManagement from "../Pages/OrderManagement";
import MarketShare from "../components/MarketShare";
import Bookings from "../components/Bookings";


import UserList from "../components/UserList";

// ✅ Admin authentication components
import AdminLogin from "../Pages/AdminLogin";
import AdminDashboard from "../Pages/Dashboard";
import RequireAdminAuth from "../components/RequireAdminAuth";





import Article from "../Pages/Article";

import AccountPage from '../Pages/account/AccountPage';


import HomeDecor from "../Pages/HomeDecor";

import StripePayment from '../Pages/payment/StripePayment';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51RnbvF2ehihTJAp47oqOti4AlCE4CnwutJew2v5nyEwg1FQeWSHkkhO2zk2N1isLuZ9y2ZPkGChjEFDWmW5LHzUp00P8CM2y6D');



function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/faq" element={<Faq/>} />
       <Route path="/explore" element={<Explore/>} />
        <Route path="/about" element={<About/>} />
       
         
       {/* Admin Functional Pages */}
      <Route path="/admin/orders" element={<RequireAdminAuth><OrderManagement /></RequireAdminAuth>} />
      <Route path="/admin/service" element={<RequireAdminAuth><MarketShare /></RequireAdminAuth>} />
      <Route path="/admin/booking" element={<RequireAdminAuth><Bookings /></RequireAdminAuth>} />
      <Route path="/admin/users" element={<RequireAdminAuth><UserList /></RequireAdminAuth>} />

      <Route path="/services/electricity" element={<Electricity />} />
        <Route path="/services/home-service" element={<HomeService />} />
        <Route path="/services/handcraft" element={<Handcraft />} />
        <Route path="/services/plumber" element={<Plumber />} />
        <Route path="/services/mechanic" element={<Mechanic />} />
        <Route path="/services/quote" element={<FreeQuote />} />

       <Route path="/services/electricity/ups-installation" element={<UpsInstallation />} />
       <Route path="/services/electricity/general-electric" element={<GeneralServices />} />
        <Route path="/services/electricity/fan-installation" element={<FanInstallation />} />


        <Route path="/services/plumber/tap-installation" element={<TapInstallation />} />
        <Route path="/services/plumber/tankcleaning" element={<TankCleaning />} />
        <Route path="/services/plumber/geyser-installation" element={<GeyserInstallation />} />

         <Route path="/services/homeapplience/ac-installation" element={<AcInstallation />} />
         <Route path="/services/homeapplience/washing-machine" element={< WashingMachine/>} />
         <Route path="/services/homeapplience/refrigerator" element={< Refrigerator/>} />
         <Route path="/services/homeapplience/oven" element={< Oven/>} />

        <Route path="/services/handcraft/furniture" element={<Furniture />} />
        <Route path="/services/handcraft/woodwork" element={<Woodwork />} />
        <Route path="/services/handcraft/curtins" element={<Curtains />} />

        <Route path="/blog/:id" element={<Article />} />

        <Route path="/account" element={<AccountPage />} />

        <Route path="/homedecor" element={<HomeDecor/>} />
         <Route
  path="/payment/stripe"
  element={
    <Elements stripe={stripePromise}>
      <StripePayment />
    </Elements>
  }
/>

     




{/* Admin Auth Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={
        <RequireAdminAuth>
          <Dashboard/>
        </RequireAdminAuth>
      } />

       
    
    </Routes>
  );
}

export default MainStack;
