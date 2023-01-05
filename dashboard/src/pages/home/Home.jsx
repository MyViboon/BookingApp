import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Wigget from "../../components/wigget/Wigget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return <div className="home">
    <Sidebar/>
    <div className="homeContainer">
      <Navbar/>
      <div className="wiggets">
        <Wigget type="user"/>
        <Wigget type="order"/>
        <Wigget type="earning"/>
        <Wigget type="balance"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
    </div>
  </div>;
};

export default Home;