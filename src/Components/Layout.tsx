import {Outlet} from 'react-router-dom';
import MainHeaderBar from './MainHeaderBar';
import Footer from './Footer';

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