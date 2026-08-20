"use client";

import React, { useState } from "react";
import NavBar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

function ResponsiveNavbar() {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <>
      <NavBar openNav={openNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />
    </>
  );
}

export default ResponsiveNavbar;
