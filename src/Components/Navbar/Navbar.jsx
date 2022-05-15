import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
// import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
  const safari = navigator.userAgent.indexOf("Safari") !== -1 ? true : false;
  const [isOpen, setIsOpen] = useState(false);

  // const navwidth = safari ? "650px" : "650px";
  const navwidth = "400px";

  return (
    <div className="Navbar">
      <Link className="link" to="/">
        <img className="navbar-logo" src={LOGO}></img>
      </Link>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link onClick={() => setIsOpen(!isOpen)} to="/">
          HOME
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/journey">
          THE JOURNEY
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/team">
          TEAM
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/store">
          STORE
        </Link>

        <Link onClick={() => setIsOpen(!isOpen)} to="/contact">
          CONTACT
        </Link>
      </div>

      <div className="navbar-user-info">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0.7"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="none" cx="12" cy="7" r="3"></circle>
          <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
        </svg>
        <p>Gagan</p>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;

// import React from "react";
// import { useState } from "react";
// import "./Navbar.css";

// import LOGO from "../../assets/LOGO.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="navbar-wrapper">
//       <img className="navbar-logo" src={LOGO}></img>

//       <div className={`nav-items ${isOpen && "open"}`}>
//         <Link onClick={() => setIsOpen(!isOpen)} to="/">
//           HOME
//         </Link>
//         <Link onClick={() => setIsOpen(!isOpen)} to="/journey">
//           THE JOURNEY
//         </Link>
//         <Link onClick={() => setIsOpen(!isOpen)} to="/team">
//           TEAM
//         </Link>
//         <Link onClick={() => setIsOpen(!isOpen)} to="/store">
//           STORE
//         </Link>
//         <Link onClick={() => setIsOpen(!isOpen)} to="/contact">
//           CONTACT
//         </Link>
//       </div>

//       <div className="navbar-user-info">
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           stroke-width="0.7"
//           viewBox="0 0 24 24"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle fill="none" cx="12" cy="7" r="3"></circle>
//           <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
//         </svg>
//         <p>Gagan</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
