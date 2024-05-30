import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import AnotherSideBar from "./components/AnotherSideBar"; // Import your other sidebar component
import Main from "./components/Main";
import MiniNav from "./components/MiniNav";

function App() {
  const [isAnotherSidebarVisible, setIsAnotherSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsAnotherSidebarVisible(!isAnotherSidebarVisible);
  };

  return (
    <div className="flex">
      {isAnotherSidebarVisible ? <AnotherSideBar toggleSidebar={toggleSidebar}/> : <SideBar />}
      <div className="flex-[24]">
        <Navbar toggleSidebar={toggleSidebar} />
        <MiniNav/>
        <Main/>
      </div>
      
    </div>
  );
}

export default App;