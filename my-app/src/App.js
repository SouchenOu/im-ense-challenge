import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="flex">
      <SideBar/>
      <div className="flex-[24]">
        <Navbar/>
      </div>
     
    </div>
  );
}

export default App;
