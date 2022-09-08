import "./App.css";
import SitesConnectedTo from "./layouts/sites_connected_to";
import {Fragment} from "react";
import Navbar from "./layouts/navbar";
import RecentTransactions from "./layouts/recent_trasanctions";
import HeroSection from "./layouts/hero_section";
import Footer from "./layouts/footer";

function App() {
  return (
      <Fragment>
          <Navbar />
          <div className="App">
              <HeroSection />
              <SitesConnectedTo />
              <RecentTransactions />
          </div>
          <Footer />
      </Fragment>
  );
}

export default App;
