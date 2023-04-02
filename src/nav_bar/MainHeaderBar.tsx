import {Link} from 'react-router-dom';
import './MainHeaderBar.css';

function MainHeaderBar() {
    return (
      <div id="mainHeaderBar">
        <h2 id="companyName">CSB Enterprises</h2>
        <nav id="links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Staff">Staff</Link>
          <Link to="/Careers">Careers</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div>
    );
  }

  export default MainHeaderBar;