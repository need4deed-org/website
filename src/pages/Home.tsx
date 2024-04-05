import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import AboutProject from "../components/AboutProject/AboutProject";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Sponsors from "../components/Sponsors/Sponsors";
import VolunteerOpportunity from "../components/VolunteerOpportunity/VolunteerOpportunity";
import { Lang } from "../types";
import "./Home.css";

interface Props {
  lng?: Lang;
}

function Home({ lng = Lang.EN }: Props) {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

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

export default Home;
