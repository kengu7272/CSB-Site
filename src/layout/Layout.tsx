import {Outlet} from 'react-router-dom';
import MainHeaderBar from '../nav_bar/MainHeaderBar';
import Footer from '../footer/Footer';

function Layout() {
    return (
      <>
        <MainHeaderBar />
        <Footer />
        <Outlet />
      </>
    );
}

export default Layout;