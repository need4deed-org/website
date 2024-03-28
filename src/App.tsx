import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AboutProject from "./components/AboutProject/AboutProject";
import VolunteerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity";
import Sponsors from "./components/Sponsors/Sponsors";



function App() {
  return (
    <div className="app-container">
      <div className="navbar-main-container">
        <Header />
        <Main />
      </div>
      <VolunteerOpportunity />
      <Sponsors />
      <AboutProject />
      <Footer />
    </div>
  );
}

export default App;
