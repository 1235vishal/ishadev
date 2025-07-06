// App.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import BookingForm from "./pages/Bookingform"; // Adjust the import path as needed
import Contactus from "./pages/ContactUs";
import Gallerypage from "./pages/Gallery"; // Adjust the import path as needed
import Home from "./pages/Home";
import HotelDining from "./pages/HotelDining"; // Adjust the import path as needed
import Navnew from "./pages/NavNew";
import Rooms from "./pages/Rooms";
const App = () => {
  return (
    <>
      <Navnew />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Gallerypage" element={<Gallerypage />} />
        <Route path="/Bookingform" element={<BookingForm />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/HotelDining" element={<HotelDining />} />
      </Routes>
    </>
  );
};

export default App;
