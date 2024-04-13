import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import AboutProject from "../components/AboutProject/AboutProject";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Sponsors from "../components/Sponsors/Sponsors";
import VolunteerOpportunity from "../components/VolunteerOpportunity/VolunteerOpportunity";
import { Lang } from "../types";
import { isEnumValue } from "../utils";
import "./Home.css";

function Home() {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEnumValue(Lang, lng)) i18n.changeLanguage(lng);
    else {
      navigate(`/${Lang.EN}`, { replace: true });
    }
  }, [lng, i18n, navigate]);

  return (
    <div className="app-container">
      <div className="navbar-main-container">
        <Header />
        <Main />
      </div>
      <VolunteerOpportunity />
      <AboutProject />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
