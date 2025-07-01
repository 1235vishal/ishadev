

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Styles/Navnew.css';

// const NewNav = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
//   const [isMobileEventDropdownOpen, setIsMobileEventDropdownOpen] = useState(false);

//   const handleLogoClick = () => {
//     window.open("https://www.magnoliyagrand.com/index.html");
//   };

//   const handleQuoteClick = () => {
//     window.open("https://demo2.wpopal.com/grenda2/");
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//     setIsMobileEventDropdownOpen(false);
//   };

//   const toggleEventDropdown = () => {
//     setIsEventDropdownOpen(!isEventDropdownOpen);
//   };

//   const toggleMobileEventDropdown = () => {
//     setIsMobileEventDropdownOpen(!isMobileEventDropdownOpen);
//   };

//   const closeEventDropdown = () => {
//     setIsEventDropdownOpen(false);
//   };

//   return (
//     <div className="newnav-header-parent">
//       {/* Top Section */}
//       <div className="newnav-top-section">
//         <div className="newnav-container">
//           <div className="newnav-top-left">
//             <div className="newnav-address">
//               <span className="newnav-address-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
//             </div>
//             <div className="newnav-divider"></div>
//             <div className="newnav-office-hours">
//               <span className="newnav-office-label">Office Hours:</span>
//               <span className="newnav-office-time">9:00 - 5:00 pm</span>
//             </div>
//           </div>
          
//           <div className="newnav-top-center">
//             <img
//               className="newnav-logo"
//               alt="Logo"
//               src="./logobest.png"
//               onClick={handleLogoClick}
//             />
//           </div>
          
//           <div className="newnav-top-right">
//             <div className="newnav-support-section">
//               <span className="newnav-support-label">Support</span>
//               <span className="newnav-support-number">+1 (703) 843-5543</span>
//             </div>
//             <div className="newnav-divider"></div>
//             <div className="newnav-quote-section">
//               <button className="newnav-quote-btn" onClick={handleQuoteClick}>
//                 REQUEST A QUOTE
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="newnav-mobile-toggle">
//             <button 
//               className={`newnav-hamburger ${isSidebarOpen ? 'active' : ''}`}
//               onClick={toggleSidebar}
//               aria-label="Toggle menu"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Section - Desktop */}
//       <div className="newnav-nav-section">
//         <div className="newnav-nav-top-line">
//           <img className="newnav-top-line-image" alt="" src="./newnav.png" />
//         </div>
//         <div className="newnav-nav-container">
//           <div className="newnav-nav-left">
//             <nav className="newnav-navigation">
        
//                            <Link to="/" className="newnav-nav-item">HOME</Link>
//               <Link to="/rooms" className="newnav-nav-item">Rooms & Suites</Link>
//               <Link to="/dining" className="newnav-nav-item">Dining</Link>

              
//               {/* Event Venues Dropdown */}
//               <div 
//                 className="newnav-nav-dropdown"
//                 onMouseEnter={() => setIsEventDropdownOpen(true)}
//                 onMouseLeave={() => setIsEventDropdownOpen(false)}
//               >
//                 <a 
//                   href="#" 
//                   className="newnav-nav-item newnav-nav-dropdown-toggle"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     toggleEventDropdown();
//                   }}
//                 >
//                   Event Venues
//                   <span className={`newnav-dropdown-arrow ${isEventDropdownOpen ? 'open' : ''}`}>
//                     ▼
//                   </span>
//                 </a>
                
//                 <div className={`newnav-dropdown-menu ${isEventDropdownOpen ? 'show' : ''}`}>
//                 <Link to="/events/weddings" className="newnav-dropdown-item" onClick={closeEventDropdown}>Weddings & Social Events</Link>
//                   <Link to="/events/corporate" className="newnav-dropdown-item" onClick={closeEventDropdown}>Corporate Events</Link>
//                   <Link to="/events/services" className="newnav-dropdown-item" onClick={closeEventDropdown}>Event Services</Link>
//                 </div>
//               </div>
//             </nav>
//           </div>
          
//           <div className="newnav-nav-center">
//             <div className="newnav-center-divider">
//               <img className="newnav-center-icon" alt="" src="Vector.svg" />
//             </div>
//           </div>
          
//           <div className="newnav-nav-right">
//             <nav className="newnav-navigation">
//               <Link to="/venus"  className="newnav-nav-item" target="_blank" rel="noopener noreferrer">VENUES</Link>
//               <Link to="/gallery" className="newnav-nav-item">Gallery</Link>
//               <Link to="/Aboutus" className="newnav-nav-item">About Us</Link>
//               <Link to="/ContactUs" className="newnav-nav-item">Contact</Link>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar Overlay */}
//       <div 
//         className={`newnav-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
//         onClick={closeSidebar}
//       ></div>

//       {/* Mobile Sidebar */}
//       <div className={`newnav-sidebar ${isSidebarOpen ? 'active' : ''}`}>
//         <div className="newnav-sidebar-header">
//           <img
//             className="newnav-sidebar-logo"
//             alt="Logo"
//             src="./logobest.png"
//             onClick={handleLogoClick}
//           />
//         </div>

//         <div className="newnav-sidebar-content">
//           {/* Navigation Links - Now at the top */}
//           <nav className="newnav-sidebar-nav">
//           <Link to="/" className="newnav-sidebar-link" onClick={closeSidebar}>HOME</Link>
//             <Link to="/Aboutus" className="newnav-sidebar-link" onClick={closeSidebar}>ABOUT US</Link>
//             <Link to="/services" className="newnav-sidebar-link" onClick={closeSidebar}>SERVICES</Link>
//             <Link to="/menus" className="newnav-sidebar-link" onClick={closeSidebar}>MENUS</Link>
            
//             {/* Mobile Event Venues Dropdown */}
//             <div className="newnav-mobile-dropdown">
//               <a 
//                 href="#" 
//                 className="newnav-sidebar-link newnav-mobile-dropdown-toggle"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleMobileEventDropdown();
//                 }}
//               >
//                 Event Venues
//                 <span className={`newnav-mobile-dropdown-arrow ${isMobileEventDropdownOpen ? 'open' : ''}`}>
//                   ▼
//                 </span>
//               </a>
              
//               <div className={`newnav-mobile-dropdown-menu ${isMobileEventDropdownOpen ? 'show' : ''}`}>
//               <Link to="/events/weddings" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>Weddings & Social Events</Link>
//                 <Link to="/events/corporate" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>Corporate Events</Link>
//                 <Link to="/events/services" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>Event Services</Link>
//               </div>
//             </div>

//             <a href="https://demo2.wpopal.com/grenda2/venues/" className="newnav-sidebar-link" onClick={closeSidebar} target="_blank" rel="noopener noreferrer">VENUES</a>
//             <Link to="/blog" className="newnav-sidebar-link" onClick={closeSidebar}>BLOG</Link>
//             <Link to="/page" className="newnav-sidebar-link" onClick={closeSidebar}>PAGE</Link>
//             <Link to="/ContactUs" className="newnav-sidebar-link" onClick={closeSidebar}>CONTACT</Link>
//           </nav>

//           {/* Quote Button - Now in the middle */}
//           <div className="newnav-sidebar-quote">
//             <button className="newnav-sidebar-quote-btn" onClick={handleQuoteClick}>
//               REQUEST A QUOTE
//             </button>
//           </div>

//           {/* Address and Office Hours - Now at the bottom */}
//           <div className="newnav-sidebar-info">
//             <div className="newnav-sidebar-address">
//               <span className="newnav-sidebar-label">Address:</span>
//               <span className="newnav-sidebar-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
//             </div>
//             <div className="newnav-sidebar-hours">
//               <span className="newnav-sidebar-label">Office Hours:</span>
//               <span className="newnav-sidebar-text">9:00 - 5:00 pm</span>
//             </div>
//             <div className="newnav-sidebar-support">
//               <span className="newnav-sidebar-label">Support:</span>
//               <span className="newnav-sidebar-phone">+1 (703) 843-5543</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewNav;


// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Styles/Navnew.css';

// const NewNav = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
//   const [isMobileEventDropdownOpen, setIsMobileEventDropdownOpen] = useState(false);

//   const handleLogoClick = () => {
//     window.open("https://www.magnoliyagrand.com/index.html");
//   };

//   const handleQuoteClick = () => {
//     window.open("https://demo2.wpopal.com/grenda2/");
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//     setIsMobileEventDropdownOpen(false);
//   };

//   const toggleEventDropdown = () => {
//     setIsEventDropdownOpen(!isEventDropdownOpen);
//   };

//   const toggleMobileEventDropdown = () => {
//     setIsMobileEventDropdownOpen(!isMobileEventDropdownOpen);
//   };

//   const closeEventDropdown = () => {
//     setIsEventDropdownOpen(false);
//   };

//   return (
//     <div className="newnav-header-parent">
//       {/* Top Section */}
//       <div className="newnav-top-section">
//         <div className="newnav-container">
//           <div className="newnav-top-left">
//             <div className="newnav-address">
//               <span className="newnav-address-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
//             </div>
//             <div className="newnav-divider"></div>
//             <div className="newnav-office-hours">
//               <span className="newnav-office-label">Office Hours:</span>
//               <span className="newnav-office-time">9:00 - 5:00 pm</span>
//             </div>
//           </div>
          
//           <div className="newnav-top-center">
//             <img
//               className="newnav-logo"
//               alt="Logo"
//               src="./logobest.png"
//               onClick={handleLogoClick}
//             />
//           </div>
          
//           <div className="newnav-top-right">
//             <div className="newnav-support-section">
//               <span className="newnav-support-label">Support</span>
//               <span className="newnav-support-number">+1 (703) 843-5543</span>
//             </div>
//             <div className="newnav-divider"></div>
//             <div className="newnav-quote-section">
//               <button className="newnav-quote-btn" onClick={handleQuoteClick}>
//                 REQUEST A QUOTE
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="newnav-mobile-toggle">
//             <button 
//               className={`newnav-hamburger ${isSidebarOpen ? 'active' : ''}`}
//               onClick={toggleSidebar}
//               aria-label="Toggle menu"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Section - Desktop */}
//       <div className="newnav-nav-section">
//         <div className="newnav-nav-top-line">
//           <img className="newnav-top-line-image" alt="" src="./newnav.png" />
//         </div>
//         <div className="newnav-nav-container">
//           <div className="newnav-nav-left">
//             <nav className="newnav-navigation">
//               <Link to="/" className="newnav-nav-item">HOME</Link>
//               <Link to="/rooms" className="newnav-nav-item">Rooms & Suites</Link>
//               <Link to="/dining" className="newnav-nav-item">Dining</Link>

//               {/* Event Venues Dropdown - Desktop */}
//               <div 
//                 className="newnav-nav-dropdown"
//                 onMouseEnter={toggleEventDropdown}
//                 onMouseLeave={toggleEventDropdown}
//               >
//                 <Link 
//                   to="#"
//                   className="newnav-nav-item newnav-nav-dropdown-toggle"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     toggleEventDropdown();
//                   }}
//                 >
//                   Event Venues
//                   <span className={`newnav-dropdown-arrow ${isEventDropdownOpen ? 'open' : ''}`}>
//                     ▼
//                   </span>
//                 </Link>
                
//                 <div className={`newnav-dropdown-menu ${isEventDropdownOpen ? 'show' : ''}`}>
//                   <Link to="/events/weddings" className="newnav-dropdown-item" onClick={closeEventDropdown}>Weddings & Social Events</Link>
//                   <Link to="/events/corporate" className="newnav-dropdown-item" onClick={closeEventDropdown}>Corporate Events</Link>
//                   <Link to="/events/services" className="newnav-dropdown-item" onClick={closeEventDropdown}>Event Services</Link>
//                 </div>
//               </div>
//             </nav>
//           </div>
          
//           <div className="newnav-nav-center">
//             <div className="newnav-center-divider">
//               <img className="newnav-center-icon" alt="" src="Vector.svg" />
//             </div>
//           </div>
          
//           <div className="newnav-nav-right">
//             <nav className="newnav-navigation">
//               <Link to="/venus" className="newnav-nav-item" target="_blank" rel="noopener noreferrer">VENUES</Link>
//               <Link to="/gallery" className="newnav-nav-item">Gallery</Link>
//               <Link to="/Aboutus" className="newnav-nav-item">About Us</Link>
//               <Link to="/ContactUs" className="newnav-nav-item">Contact</Link>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar Overlay */}
//       <div 
//         className={`newnav-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
//         onClick={closeSidebar}
//       ></div>

//       {/* Mobile Sidebar */}
//       <div className={`newnav-sidebar ${isSidebarOpen ? 'active' : ''}`}>
//         <div className="newnav-sidebar-header">
//           <img
//             className="newnav-sidebar-logo"
//             alt="Logo"
//             src="./logobest.png"
//             onClick={handleLogoClick}
//           />
//         </div>

//         <div className="newnav-sidebar-content">
//           <nav className="newnav-sidebar-nav">
//             <Link to="/" className="newnav-sidebar-link" onClick={closeSidebar}>HOME</Link>
//             <Link to="/rooms" className="newnav-sidebar-link" onClick={closeSidebar}>Rooms & Suites</Link>
//             <Link to="/dining" className="newnav-sidebar-link" onClick={closeSidebar}>Dining</Link>
            
//             {/* Mobile Event Venues Dropdown */}
//             <div className="newnav-mobile-dropdown">
//               <Link 
//                 to="#"
//                 className="newnav-sidebar-link newnav-mobile-dropdown-toggle"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleMobileEventDropdown();
//                 }}
//               >
//                 Event Venues
//                 <span className={`newnav-mobile-dropdown-arrow ${isMobileEventDropdownOpen ? 'open' : ''}`}>
//                   ▼
//                 </span>
//               </Link>
              
//               <div className={`newnav-mobile-dropdown-menu ${isMobileEventDropdownOpen ? 'show' : ''}`}>
//                 <Link to="/events/weddings" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>Weddings & Social Events</Link>
//                 <Link to="/events/corporate" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>Corporate Events</Link>
//                 <Link to="/events/services" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>Event Services</Link>
//               </div>
//             </div>

//             <Link to="/venus" className="newnav-sidebar-link" onClick={closeSidebar} target="_blank" rel="noopener noreferrer">VENUES</Link>
//             <Link to="/gallery" className="newnav-sidebar-link" onClick={closeSidebar}>Gallery</Link>
//             <Link to="/Aboutus" className="newnav-sidebar-link" onClick={closeSidebar}>About Us</Link>
//             <Link to="/ContactUs" className="newnav-sidebar-link" onClick={closeSidebar}>Contact</Link>
//           </nav>

//           <div className="newnav-sidebar-quote">
//             <button className="newnav-sidebar-quote-btn" onClick={handleQuoteClick}>
//               REQUEST A QUOTE
//             </button>
//           </div>

//           <div className="newnav-sidebar-info">
//             <div className="newnav-sidebar-address">
//               <span className="newnav-sidebar-label">Address:</span>
//               <span className="newnav-sidebar-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
//             </div>
//             <div className="newnav-sidebar-hours">
//               <span className="newnav-sidebar-label">Office Hours:</span>
//               <span className="newnav-sidebar-text">9:00 - 5:00 pm</span>
//             </div>
//             <div className="newnav-sidebar-support">
//               <span className="newnav-sidebar-label">Support:</span>
//               <span className="newnav-sidebar-phone">+1 (703) 843-5543</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewNav;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Styles/Navnew.css';

// const NewNav = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
//   const [isMobileEventDropdownOpen, setIsMobileEventDropdownOpen] = useState(false);

//   const handleLogoClick = () => {
//     window.open("https://www.magnoliyagrand.com/index.html");
//   };

//   const handleQuoteClick = () => {
//     window.open("https://demo2.wpopal.com/grenda2/");
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//     setIsMobileEventDropdownOpen(false);
//   };

//   const toggleEventDropdown = () => {
//     setIsEventDropdownOpen(!isEventDropdownOpen);
//   };

//   const toggleMobileEventDropdown = () => {
//     setIsMobileEventDropdownOpen(!isMobileEventDropdownOpen);
//   };

//   const closeEventDropdown = () => {
//     setIsEventDropdownOpen(false);
//   };

//   return (
//     <div className="newnav-header-parent">
//       {/* Top Section */}
//       <div className="newnav-top-section">
//         <div className="newnav-container">
//           <div className="newnav-top-left">
//             <div className="newnav-address">
//               <span className="newnav-address-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
//             </div>
//             <div className="newnav-divider"></div>
//             <div className="newnav-office-hours">
//               <span className="newnav-office-label">Office Hours:</span>
//               <span className="newnav-office-time">9:00 - 5:00 pm</span>
//             </div>
//           </div>
          
//           <div className="newnav-top-center">
//             <img
//               className="newnav-logo"
//               alt="Logo"
//               src="./logobest.png"
//               onClick={handleLogoClick}
//             />
//           </div>
          
//           <div className="newnav-top-right">
//             <div className="newnav-support-section">
//               <span className="newnav-support-label">Support</span>
//               <span className="newnav-support-number">+1 (703) 843-5543</span>
//             </div>
//             <div className="newnav-divider"></div>
//             <div className="newnav-quote-section">
//               <button className="newnav-quote-btn" onClick={handleQuoteClick}>
//                 REQUEST A QUOTE
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="newnav-mobile-toggle">
//             <button 
//               className={`newnav-hamburger ${isSidebarOpen ? 'active' : ''}`}
//               onClick={toggleSidebar}
//               aria-label="Toggle menu"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Section - Desktop */}
//       <div className="newnav-nav-section">
//         <div className="newnav-nav-top-line">
//           <img className="newnav-top-line-image" alt="" src="./newnav.png" />
//         </div>
//         <div className="newnav-nav-container">
//           <div className="newnav-nav-left">
//             <nav className="newnav-navigation">
//               <Link to="/" className="newnav-nav-item">HOME</Link>
//               <Link to="/rooms" className="newnav-nav-item">Rooms & Suites</Link>
//               <Link to="/dining" className="newnav-nav-item">Dining</Link>

//               {/* Event Venues Dropdown - Desktop */}
//               <div 
//                 className="newnav-nav-dropdown"
//                 onMouseEnter={() => setIsEventDropdownOpen(true)}
//                 onMouseLeave={() => setIsEventDropdownOpen(false)}
//               >
//                 <div 
//                   className="newnav-nav-item newnav-nav-dropdown-toggle"
//                   onClick={toggleEventDropdown}
//                 >
//                   Event Venues
//                   <span className={`newnav-dropdown-arrow ${isEventDropdownOpen ? 'open' : ''}`}>
//                     ▼
//                   </span>
//                 </div>
                
//                 <div 
//                   className={`newnav-dropdown-menu ${isEventDropdownOpen ? 'show' : ''}`}
//                   onMouseEnter={() => setIsEventDropdownOpen(true)}
//                   onMouseLeave={() => setIsEventDropdownOpen(false)}
//                 >
//                   <Link to="/events/weddings" className="newnav-dropdown-item" onClick={closeEventDropdown}>
//                     Weddings & Social Events
//                   </Link>
//                   <Link to="/events/corporate" className="newnav-dropdown-item" onClick={closeEventDropdown}>
//                     Corporate Events
//                   </Link>
//                   <Link to="/events/services" className="newnav-dropdown-item" onClick={closeEventDropdown}>
//                     Event Services
//                   </Link>
//                 </div>
//               </div>
//             </nav>
//           </div>
          
//           <div className="newnav-nav-center">
//             <div className="newnav-center-divider">
//               <img className="newnav-center-icon" alt="" src="Vector.svg" />
//             </div>
//           </div>
          
//           <div className="newnav-nav-right">
//             <nav className="newnav-navigation">
//               <Link to="/venus" className="newnav-nav-item" target="_blank" rel="noopener noreferrer">VENUES</Link>
//               <Link to="/gallery" className="newnav-nav-item">Gallery</Link>
//               <Link to="/Aboutus" className="newnav-nav-item">About Us</Link>
//               <Link to="/ContactUs" className="newnav-nav-item">Contact</Link>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar Overlay */}
//       <div 
//         className={`newnav-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
//         onClick={closeSidebar}
//       ></div>

//       {/* Mobile Sidebar */}
//       <div className={`newnav-sidebar ${isSidebarOpen ? 'active' : ''}`}>
//         <div className="newnav-sidebar-header">
//           <img
//             className="newnav-sidebar-logo"
//             alt="Logo"
//             src="./logobest.png"
//             onClick={handleLogoClick}
//           />
//         </div>

//         <div className="newnav-sidebar-content">
//           <nav className="newnav-sidebar-nav">
//             <Link to="/" className="newnav-sidebar-link" onClick={closeSidebar}>HOME</Link>
//             <Link to="/rooms" className="newnav-sidebar-link" onClick={closeSidebar}>Rooms & Suites</Link>
//             <Link to="/dining" className="newnav-sidebar-link" onClick={closeSidebar}>Dining</Link>
            
//             {/* Mobile Event Venues Dropdown */}
//             <div className="newnav-mobile-dropdown">
//               <div 
//                 className="newnav-sidebar-link newnav-mobile-dropdown-toggle"
//                 onClick={toggleMobileEventDropdown}
//               >
//                 Event Venues
//                 <span className={`newnav-mobile-dropdown-arrow ${isMobileEventDropdownOpen ? 'open' : ''}`}>
//                   ▼
//                 </span>
//               </div>
              
//               <div className={`newnav-mobile-dropdown-menu ${isMobileEventDropdownOpen ? 'show' : ''}`}>
//                 <Link to="/events/weddings" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>
//                   Weddings & Social Events
//                 </Link>
//                 <Link to="/events/corporate" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>
//                   Corporate Events
//                 </Link>
//                 <Link to="/events/services" className="newnav-mobile-dropdown-item" onClick={closeSidebar}>
//                   Event Services
//                 </Link>
//               </div>
//             </div>

//             <Link to="/venus" className="newnav-sidebar-link" onClick={closeSidebar} target="_blank" rel="noopener noreferrer">VENUES</Link>
//             <Link to="/gallery" className="newnav-sidebar-link" onClick={closeSidebar}>Gallery</Link>
//             <Link to="/Aboutus" className="newnav-sidebar-link" onClick={closeSidebar}>About Us</Link>
//             <Link to="/ContactUs" className="newnav-sidebar-link" onClick={closeSidebar}>Contact</Link>
//           </nav>

//           <div className="newnav-sidebar-quote">
//             <button className="newnav-sidebar-quote-btn" onClick={handleQuoteClick}>
//               REQUEST A QUOTE
//             </button>
//           </div>

//           <div className="newnav-sidebar-info">
//             <div className="newnav-sidebar-address">
//               <span className="newnav-sidebar-label">Address:</span>
//               <span className="newnav-sidebar-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
//             </div>
//             <div className="newnav-sidebar-hours">
//               <span className="newnav-sidebar-label">Office Hours:</span>
//               <span className="newnav-sidebar-text">9:00 - 5:00 pm</span>
//             </div>
//             <div className="newnav-sidebar-support">
//               <span className="newnav-sidebar-label">Support:</span>
//               <span className="newnav-sidebar-phone">+1 (703) 843-5543</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewNav;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navnew.css';

const NewNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoClick = () => {
    window.open("https://www.magnoliyagrand.com/index.html");
  };

  const handleQuoteClick = () => {
    window.open("https://demo2.wpopal.com/grenda2/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="newnav-header-parent">
      {/* Top Section */}
      <div className="newnav-top-section">
        <div className="newnav-container">
          <div className="newnav-top-left">
            <div className="newnav-address">
              <span className="newnav-address-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
            </div>
            <div className="newnav-divider"></div>
            <div className="newnav-office-hours">
              <span className="newnav-office-label">Office Hours:</span>
              <span className="newnav-office-time">9:00 - 5:00 pm</span>
            </div>
          </div>
          
          <div className="newnav-top-center">
            <img
              className="newnav-logo"
              alt="Logo"
              src="./logobest.png"
              onClick={handleLogoClick}
            />
          </div>
          
          <div className="newnav-top-right">
            <div className="newnav-support-section">
              <span className="newnav-support-label">Support</span>
              <span className="newnav-support-number">+1 (703) 843-5543</span>
            </div>
            <div className="newnav-divider"></div>
            <div className="newnav-quote-section">
              <button className="newnav-quote-btn" onClick={handleQuoteClick}>
                REQUEST A QUOTE
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="newnav-mobile-toggle">
            <button 
              className={`newnav-hamburger ${isSidebarOpen ? 'active' : ''}`}
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Section - Desktop */}
      <div className="newnav-nav-section">
        <div className="newnav-nav-top-line">
          <img className="newnav-top-line-image" alt="" src="./newnav.png" />
        </div>
        <div className="newnav-nav-container">
          <div className="newnav-nav-left">
            <nav className="newnav-navigation">
              <Link to="/" className="newnav-nav-item">HOME</Link>
              <Link to="/rooms" className="newnav-nav-item">Rooms & Suites</Link>
              <Link to="/dining" className="newnav-nav-item">Dining</Link>
              <Link to="/events" className="newnav-nav-item">Event Venues</Link>
            </nav>
          </div>
          
          <div className="newnav-nav-center">
            <div className="newnav-center-divider">
              <img className="newnav-center-icon" alt="" src="Vector.svg" />
            </div>
          </div>
          
          <div className="newnav-nav-right">
            <nav className="newnav-navigation">
              <Link to="/venus" className="newnav-nav-item" target="_blank" rel="noopener noreferrer">VENUES</Link>
              <Link to="/gallery" className="newnav-nav-item">Gallery</Link>
              <Link to="/Aboutus" className="newnav-nav-item">About Us</Link>
              <Link to="/ContactUs" className="newnav-nav-item">Contact</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`newnav-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`newnav-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="newnav-sidebar-header">
          <img
            className="newnav-sidebar-logo"
            alt="Logo"
            src="./logobest.png"
            onClick={handleLogoClick}
          />
        </div>

        <div className="newnav-sidebar-content">
          <nav className="newnav-sidebar-nav">
            <Link to="/" className="newnav-sidebar-link" onClick={closeSidebar}>HOME</Link>
            <Link to="/rooms" className="newnav-sidebar-link" onClick={closeSidebar}>Rooms & Suites</Link>
            <Link to="/dining" className="newnav-sidebar-link" onClick={closeSidebar}>Dining</Link>
            <Link to="/events" className="newnav-sidebar-link" onClick={closeSidebar}>Event Venues</Link>
            <Link to="/venus" className="newnav-sidebar-link" onClick={closeSidebar} target="_blank" rel="noopener noreferrer">VENUES</Link>
            <Link to="/gallery" className="newnav-sidebar-link" onClick={closeSidebar}>Gallery</Link>
            <Link to="/Aboutus" className="newnav-sidebar-link" onClick={closeSidebar}>About Us</Link>
            <Link to="/ContactUs" className="newnav-sidebar-link" onClick={closeSidebar}>Contact</Link>
          </nav>

          <div className="newnav-sidebar-quote">
            <button className="newnav-sidebar-quote-btn" onClick={handleQuoteClick}>
              REQUEST A QUOTE
            </button>
          </div>

          <div className="newnav-sidebar-info">
            <div className="newnav-sidebar-address">
              <span className="newnav-sidebar-label">Address:</span>
              <span className="newnav-sidebar-text">7001 Infantry Ridge Rd, Manassas, VA 20109</span>
            </div>
            <div className="newnav-sidebar-hours">
              <span className="newnav-sidebar-label">Office Hours:</span>
              <span className="newnav-sidebar-text">9:00 - 5:00 pm</span>
            </div>
            <div className="newnav-sidebar-support">
              <span className="newnav-sidebar-label">Support:</span>
              <span className="newnav-sidebar-phone">+1 (703) 843-5543</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNav;