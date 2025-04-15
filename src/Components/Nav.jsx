import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";


const Nav = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (state) => () => {
    // Only allow opening drawer on mobile
    if (isMobile || !state) {
      setOpen(state);
    }
  };

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="w-full">
      {/* AppBar from MUI */}
      <AppBar position="static" className="bg-white text-black shadow-md">
        <Toolbar className="flex justify-between bg-black">
          {/* Logo or Brand */}
          {/* <h1 className="text-xl font-bold">MyLogo</h1> */}
          <img
            className="w-[18vw]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDQWUGOo9G6BJTF4ZFdlyMw-9pX9iMODHp8C68ZYHz-JiN0BtwOD75oXYbmFdL5A3tOk&usqp=CAU"
            alt=""
          />

          {/* Desktop Menu */}
          <Box className="hidden md:flex space-x-6">
            {/* <button>
              <Link to={"/"}>Home</Link>
            </button>
            <button>
              <Link to={"/driverList"}>Drivers</Link>
            </button> */}
            {/* <button><Link to={'/'}>Home</Link></button>
            <button><Link to={'/'}>Home</Link></button> */}

            {/* {menuItems.map((item) => (
              <Link key={item} className="text-white font-semibold normal-case">
                {item}
              </Link>
            ))} */}
          </Box>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              className="md:hidden text-black"
              onClick={toggleDrawer(true)}
            >
              <h1 className="text-white"><i className="ri-menu-3-line"></i>
              </h1>
              {/* <MenuIcon /> */}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile Navigation) */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          className="w-34 flex flex-col justify-center items-center mt-4 text-xl"
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <button className="p-2">
            <Link to={"/"}>Home</Link>
          </button>
          <button className="p-2">
            <Link to={"/driverList"}>Drivers</Link>
          </button>
          <button className="p-2">
            <Link to={"/histry"}>History</Link>
          </button>
          <button className=" bg-red-500 p-2 mt-2 text-white rounded-2xl">
            <Link to={"/"}>Logout</Link>
          </button>
        </Box>
      </Drawer>
    </div>
  );
};

export default Nav;
