// App.jsx
import { Route, Routes } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/ContactUs';
import Home from './pages/Home';
import Navnew from './pages/NavNew';

const App = () => {
  return (
    <>
      <Navnew />
      <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/Aboutus" element={<Aboutus />} />
              <Route path="/Contactus" element={<Contactus />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default App;
