import Layout from '../components/Layout';
import MainPage from '../pages/main_page/MainPage';
import AboutPage from '../pages/about_page/AboutPage';
import StaffPage from '../pages/staff_page/StaffPage';
import CareersPage from '../pages/careers_page/CareersPage';
import ContactPage from '../pages/contact_page/ContactPage';
import NoPage from '../pages/no_page/NoPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Staff" element={<StaffPage />} />
            <Route path="/Careers" element={<CareersPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>     
    </>
  );
}

export default App;
