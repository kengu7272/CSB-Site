import {Link} from 'react-router-dom';

function MainHeaderBar() {
    return (
      <div className="flex flex-row items-center h-[8vh] border-b border-[#636363]">
        <h2 className="ml-[1vw] absolute text-[1.75vw]">CSB Enterprises</h2>
        <nav className="flex gap-[5vw] ml-auto mr-auto">
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