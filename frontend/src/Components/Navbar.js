import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store.js";
import toast from "react-hot-toast";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Images/logo.jpg";

function Navbar() {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen < 960px

  // Logout function
  const handleLogout = () => {
    dispatch(authActions.logout());
    toast.success("User logout successful");
    navigate("/login");
    localStorage.clear();
  };

  // About Us Dropdown State (For Desktop)
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const handleAboutClick = (event) => setAboutAnchor(event.currentTarget);
  const handleAboutClose = () => setAboutAnchor(null);

  return (
    <>
      {/* Sticky Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#9e0059",
          color: "white",
          zIndex: 1000,
        }}
      >
        <Typography variant="h6">My Blog App</Typography>
      </div>

      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <img src={Logo} alt="logo" height={60} style={{ marginRight: 10 }} />
          </Box>

          {/* Mobile Drawer (Hamburger Menu) */}
          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ width: 250 }}>
                  <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component={Link} to="/aboutus">
                    <ListItemText primary="About Us" />
                  </ListItem>
                  <ListItem button component={Link} to="/contactus">
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                  {isLogin ? (
                    <>
                      <ListItem button component={Link} to="/blogs">
                        <ListItemText primary="Blogs" />
                      </ListItem>
                      <ListItem button component={Link} to="/my-blogs">
                        <ListItemText primary="My Blogs" />
                      </ListItem>
                      <ListItem button component={Link} to="/create-blogs">
                        <ListItemText primary="Create Blogs" />
                      </ListItem>
                      <ListItem button onClick={handleLogout}>
                        <ListItemText primary="Logout" sx={{ color: "red" }} />
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem button component={Link} to="/login">
                        <ListItemText primary="Login" />
                      </ListItem>
                      <ListItem button component={Link} to="/register">
                        <ListItemText primary="Register" />
                      </ListItem>
                    </>
                  )}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {/* Desktop Navigation */}
              <Box display="flex" gap={2}>
                <Button component={Link} to="/" sx={{ color: "white" }}>
                  Home
                </Button>

                {/* About Us Dropdown (Opens on Click) */}
                <Button onClick={handleAboutClick} sx={{ color: "white" }}>
                  About Us ▼
                </Button>
                <Menu
                  anchorEl={aboutAnchor}
                  open={Boolean(aboutAnchor)}
                  onClose={handleAboutClose}
                >
                  <MenuItem component={Link} to="/aboutus/mission" onClick={handleAboutClose}>
                    Our Mission
                  </MenuItem>
                  <MenuItem component={Link} to="/aboutus/what-we-cover" onClick={handleAboutClose}>
                    What We Cover
                  </MenuItem>
                  <MenuItem component={Link} to="/aboutus/why-devops" onClick={handleAboutClose}>
                    Why DevOps?
                  </MenuItem>
                </Menu>

                <Button component={Link} to="/contactus" sx={{ color: "white" }}>
                  Contact Us
                </Button>
              </Box>

              {/* Blog Tabs */}
              {isLogin && (
                <Tabs
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  sx={{ flexGrow: 1, justifyContent: "center" }}
                >
                  <Tab label="Blogs" component={Link} to="/blogs" />
                  <Tab label="My Blogs" component={Link} to="/my-blogs" />
                  <Tab label="Create Blogs" component={Link} to="/create-blogs" />
                </Tabs>
              )}

              {/* Auth Buttons */}
              <Box display="flex" gap={1}>
                {!isLogin ? (
                  <>
                    <Button component={Link} to="/login" sx={{ color: "white" }}>
                      Login
                    </Button>
                    <Button component={Link} to="/register" sx={{ color: "white" }}>
                      Register
                    </Button>
                  </>
                ) : (
                  <Button onClick={handleLogout} sx={{ color: "white" }}>
                    Logout
                  </Button>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store.js";
// import toast from "react-hot-toast";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   useMediaQuery,
//   useTheme,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Logo from "../Images/logo.jpg";

// function Navbar() {
//   let isLogin = useSelector((state) => state.isLogin);
//   isLogin = isLogin || localStorage.getItem("userId");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [value, setValue] = useState();
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Responsive check

//   // Logout function
//   const handleLogout = () => {
//     try {
//       dispatch(authActions.logout());
//       toast.success("User logout successful");
//       navigate("/login");
//       localStorage.clear();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Menu items
//   const menuItems = [
//     { label: "Home", link: "/" },
//     { label: "Contact Us", link: "/contactus" },
//   ];

//   // About Us Dropdown State
//   const [aboutAnchor, setAboutAnchor] = useState(null);
//   const handleAboutOpen = (event) => setAboutAnchor(event.currentTarget);
//   const handleAboutClose = () => setAboutAnchor(null);

//   return (
//     <>
//       <div
//         style={{
//           position: "sticky",
//           top: 0,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 10,
//           backgroundColor: "#9e0059",
//           zIndex: 1000,
//         }}
//       >
//         <Typography variant="h6">My Blog App</Typography>
//       </div>

//       <AppBar position="sticky">
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Logo */}
//           <Box display="flex" alignItems="center">
//             <img src={Logo} alt="logo" height={60} style={{ marginRight: 10 }} />
//           </Box>

//           {/* Mobile Drawer (Hamburger Menu) */}
//           {isMobile ? (
//             <>
//               <IconButton color="inherit" edge="end" onClick={() => setOpenDrawer(true)}>
//                 <MenuIcon />
//               </IconButton>
//               <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
//                 <List sx={{ width: 250 }}>
//                   {menuItems.map((item, index) => (
//                     <ListItem button key={index} component={Link} to={item.link}>
//                       <ListItemText primary={item.label} />
//                     </ListItem>
//                   ))}
//                   {/* About Us in Mobile View */}
//                   <ListItem button component={Link} to="/aboutus">
//                     <ListItemText primary="About Us" />
//                   </ListItem>
//                   {isLogin ? (
//                     <>
//                       <ListItem button component={Link} to="/blogs">
//                         <ListItemText primary="Blogs" />
//                       </ListItem>
//                       <ListItem button component={Link} to="/my-blogs">
//                         <ListItemText primary="My Blogs" />
//                       </ListItem>
//                       <ListItem button component={Link} to="/create-blogs">
//                         <ListItemText primary="Create Blogs" />
//                       </ListItem>
//                       <ListItem button onClick={handleLogout}>
//                         <ListItemText primary="Logout" sx={{ color: "red" }} />
//                       </ListItem>
//                     </>
//                   ) : (
//                     <>
//                       <ListItem button component={Link} to="/login">
//                         <ListItemText primary="Login" />
//                       </ListItem>
//                       <ListItem button component={Link} to="/register">
//                         <ListItemText primary="Register" />
//                       </ListItem>
//                     </>
//                   )}
//                 </List>
//               </Drawer>
//             </>
//           ) : (
//             <>
//               {/* Desktop Navigation */}
//               <Box display="flex" gap={2}>
//                 {menuItems.map((item, index) => (
//                   <Button key={index} component={Link} to={item.link} sx={{ color: "white" }}>
//                     {item.label}
//                   </Button>
//                 ))}

//                 {/* About Us Dropdown for Desktop */}
//                 <Button
//                   onMouseEnter={handleAboutOpen}
//                   onMouseLeave={handleAboutClose}
//                   sx={{ color: "white" }}
//                 >
//                   About Us ▼
//                 </Button>
//                 <Menu
//                   anchorEl={aboutAnchor}
//                   open={Boolean(aboutAnchor)}
//                   onClose={handleAboutClose}
//                   onMouseEnter={handleAboutOpen}
//                   onMouseLeave={handleAboutClose}
//                 >
//                   <MenuItem component={Link} to="/aboutus/mission" onClick={handleAboutClose}>
//                     Our Mission
//                   </MenuItem>
//                   <MenuItem component={Link} to="/aboutus/what-we-cover" onClick={handleAboutClose}>
//                     What We Cover
//                   </MenuItem>
//                   <MenuItem component={Link} to="/aboutus/why-devops" onClick={handleAboutClose}>
//                     Why DevOps?
//                   </MenuItem>
//                 </Menu>
//               </Box>

//               {/* Blog Tabs */}
//               {isLogin && (
//                 <Tabs
//                   textColor="inherit"
//                   value={value}
//                   onChange={(e, val) => setValue(val)}
//                   sx={{ flexGrow: 1, justifyContent: "center" }}
//                 >
//                   <Tab label="Blogs" component={Link} to="/blogs" />
//                   <Tab label="My Blogs" component={Link} to="/my-blogs" />
//                   <Tab label="Create Blogs" component={Link} to="/create-blogs" />
//                 </Tabs>
//               )}

//               {/* Auth Buttons */}
//               <Box display="flex" gap={1}>
//                 {!isLogin ? (
//                   <>
//                     <Button component={Link} to="/login" sx={{ color: "white" }}>
//                       Login
//                     </Button>
//                     <Button component={Link} to="/register" sx={{ color: "white" }}>
//                       Register
//                     </Button>
//                   </>
//                 ) : (
//                   <Button onClick={handleLogout} sx={{ color: "white" }}>
//                     Logout
//                   </Button>
//                 )}
//               </Box>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }

// export default Navbar;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store.js";
// import toast from "react-hot-toast";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Logo from "../Images/logo.jpg";

// function Navbar() {
//   // Global state
//   let isLogin = useSelector((state) => state.isLogin);
//   isLogin = isLogin || localStorage.getItem("userId");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [value, setValue] = useState();
//   const [openDrawer, setOpenDrawer] = useState(false);

//   // Responsive theme check
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // For screen < 960px

//   // Logout function
//   const handleLogout = () => {
//     try {
//       dispatch(authActions.logout());
//       toast.success("User logout successful");
//       navigate("/login");
//       localStorage.clear();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Menu items
//   const menuItems = [
//     { label: "Home", link: "/" },
//     { label: "About Us", link: "/aboutus" },
//     { label: "Contact Us", link: "/contactus" },
//   ];

//   return (
//     <>
// <div
//   style={{
//     position: "sticky",
//     top: 0, // Stick to the top
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     backgroundColor: "#9e0059",
//     zIndex: 1000, // Optional: ensures it stays on top of other elements
//   }}
// >         <Typography variant="h6" >My Blog App</Typography>
//          </div> 
//       <AppBar position="sticky">
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Logo */}
//           <Box display="flex" alignItems="center">
//             <img src={Logo} alt="logo" height={60} style={{ marginRight: 10 }} />
            
//           </Box>

//           {/* Mobile Drawer (Hamburger Menu) */}
//           {isMobile ? (
//             <>
//               <IconButton
//                 color="inherit"
//                 edge="end"
//                 onClick={() => setOpenDrawer(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer
//                 anchor="right"
//                 open={openDrawer}
//                 onClose={() => setOpenDrawer(false)}
//               >
//                 <List sx={{ width: 250 }}>
//                   {menuItems.map((item, index) => (
//                     <ListItem button key={index} component={Link} to={item.link}>
//                       <ListItemText primary={item.label} />
//                     </ListItem>
//                   ))}
//                   {isLogin ? (
//                     <>
//                       <ListItem button component={Link} to="/blogs">
//                         <ListItemText primary="Blogs" />
//                       </ListItem>
//                       <ListItem button component={Link} to="/my-blogs">
//                         <ListItemText primary="My Blogs" />
//                       </ListItem>
//                       <ListItem button component={Link} to="/create-blogs">
//                         <ListItemText primary="Create Blogs" />
//                       </ListItem>
//                       <ListItem button onClick={handleLogout}>
//                         <ListItemText primary="Logout" sx={{ color: "red" }} />
//                       </ListItem>
//                     </>
//                   ) : (
//                     <>
//                       <ListItem button component={Link} to="/login">
//                         <ListItemText primary="Login" />
//                       </ListItem>
//                       <ListItem button component={Link} to="/register">
//                         <ListItemText primary="Register" />
//                       </ListItem>
//                     </>
//                   )}
//                 </List>
//               </Drawer>
//             </>
//           ) : (
//             <>
//               {/* Desktop Navigation */}
//               <Box display="flex" gap={2}>
//                 {menuItems.map((item, index) => (
//                   <Button key={index} component={Link} to={item.link} sx={{ color: "white" }}>
//                     {item.label}
//                   </Button>
//                 ))}
//               </Box>

//               {/* Blog Tabs */}
//               {isLogin && (
//                 <Tabs
//                   textColor="inherit"
//                   value={value}
//                   onChange={(e, val) => setValue(val)}
//                   sx={{ flexGrow: 1, justifyContent: "center" }}
//                 >
//                   <Tab label="Blogs" component={Link} to="/blogs" />
//                   <Tab label="My Blogs" component={Link} to="/my-blogs" />
//                   <Tab label="Create Blogs" component={Link} to="/create-blogs" />
//                 </Tabs>
//               )}

//               {/* Auth Buttons */}
//               <Box display="flex" gap={1}>
//                 {!isLogin ? (
//                   <>
//                     <Button component={Link} to="/login" sx={{ color: "white" }}>
//                       Login
//                     </Button>
//                     <Button component={Link} to="/register" sx={{ color: "white" }}>
//                       Register
//                     </Button>
//                   </>
//                 ) : (
//                   <Button onClick={handleLogout} sx={{ color: "white" }}>
//                     Logout
//                   </Button>
//                 )}
//               </Box>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }

// export default Navbar;



// import { React, useState } from "react";
// import "../Styles/Navbar.css";
// import Logo from "../Images/logo.jpg";
// import { Link,  useNavigate } from "react-router-dom";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store.js";
// import toast, { Toaster } from 'react-hot-toast';
// function Navbar() {
//   //Global state

//   let isLogin = useSelector((state) => state.isLogin);
//   isLogin = isLogin || localStorage.getItem("userId");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [value, setValue] = useState();

//   //logout

//   const handleLogout = () => {
//     try {
//       dispatch(authActions.logout());
//       toast.success("User logout successful");
//     navigate('/login')
//     localStorage.clear();
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <>
//       <AppBar position="sticky">
//         <Toolbar>
//           <div>
//             <img src={Logo} alt="logo" height={80} style={{ margin: 5 }} />
//             <Typography variant="h6" style={{ margin: 5 }}>
//               My Blog App
//             </Typography>
//           </div>
//         {isLogin && (
//               <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
//               <Tabs
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, val) => setValue(val)}
//               >
//                 <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
//                 <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
//                 <Tab label="Create Blogs" LinkComponent={Link} to="/create-blogs" />
//               </Tabs>
//             </Box>
//         )}
//         <ul className='list' >
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/Aboutus">About us</Link>
//           </li>
//           <li>
//             <Link to="/contactus">Contactus</Link>
//           </li>
//           </ul>
//           <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>

//           {!isLogin && (
//             <>
//             <Button
//               sx={{ margin: 1, color: "white" }}
//               LinkComponent={Link}
//               to="/login"
//             >
//               Login
//             </Button>
//              <Button
//              sx={{ margin: 1, color: "white" }}
//              LinkComponent={Link}
//              to="/register"
//            >
//              REgister
//            </Button>
// </>
//           )}
//           {isLogin &&  (
// <Button onClick={handleLogout}
//              sx={{ margin: 1, color: "white" }}
//              LinkComponent={Link}
//              to="/logout"
//            >
//              Logout
//            </Button>
//           )}
           
    
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </>

//   );
// }
// export default Navbar;
