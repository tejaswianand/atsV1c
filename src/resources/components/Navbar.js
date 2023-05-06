// import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import { NavLink } from "react-router-dom";
// import "../styles/navbar.css";

// const Navbar = () => {
//   const openNav = () => {
//     document.getElementById("myNav").style.width = "100%";
//   };
//   return (
//     <div className="navbar">
//       <div className="logo">Hiring Needs</div>
//       <div className="menu">
//         <div className="mobile-menu">
//           <MenuIcon onclick={openNav} />
//           <div id="myNav" class="overlay">
//             <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
//               &times;
//             </a>
//             <div class="overlay-content">
//               <a href="#">About</a>
//               <a href="#">Services</a>
//               <a href="#">Clients</a>
//               <a href="#">Contact</a>
//             </div>
//           </div>
//         </div>
//         <div className="desktop-menu">
//           <ul>
//             <li>
//               <NavLink to="/">
//                 Home <i class="fa fa-home" aria-hidden="true"></i>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/jobs">
//                 Jobs <i class="fa fa-briefcase" aria-hidden="true"></i>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/apply">
//                 Apply <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/check-status">
//                 Check Status{" "}
//                 <i class="fa fa-check-circle-o" aria-hidden="true"></i>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/support">
//                 Support <i class="fa fa-ticket" aria-hidden="true"></i>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Hiring Needs</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">
                Home <i class="fa fa-home" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs">
                Jobs <i class="fa fa-briefcase" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/apply">
                Apply <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/check-status">
                Check Status{" "}
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/support">
                Support <i class="fa fa-ticket" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
