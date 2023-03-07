import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";


import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
