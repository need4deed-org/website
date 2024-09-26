import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { AppContainerContext } from "../App";
import AboutProject from "../components/AboutProject/AboutProject";
import ContactForRAC from "../components/ContactForRAC";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import IFrame from "../components/IFrame";
import Main from "../components/Main/Main";
import VolunteerOpportunity from "../components/VolunteerOpportunity/VolunteerOpportunity";
import VolunteerWorkflow from "../components/VolunteerWorkflow/VolunteerWorkflow";
import { Lang } from "../config/types";
import { isEnumValue, setLangDirection } from "../utils";

function Home() {
  const { i18n, t } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();
  const containerRef = useContext(AppContainerContext);

  useEffect(() => {
    if (isEnumValue(Lang, lng)) {
      i18n.changeLanguage(lng);
      setLangDirection(containerRef, lng as Lang);
    } else {
      navigate(`/${Lang.EN}`, { replace: true });
    }
  }, [containerRef, lng, i18n, navigate]);

  return (
    <>
      <div className="navbar-main-container">
        <Header />
        <Main />
      </div>
      <VolunteerOpportunity wrappingClassName="wrapper second" />
      <IFrame
        wrappingClassName="wrapper first"
        title={t("iframeTitles.calendar")}
        src="https://calendar.google.com/calendar/embed?wkst=2&ctz=Europe%2FBerlin&bgcolor=%23e3e9ff&showNav=1&showPrint=0&showTabs=0&showCalendars=0&src=Y18zYWQ3YTNlYzE2OGI0ZTY4YTMxOGZlMDEwN2ZmOTc0MzZhMWQ5YTAwMzEyZDhhYzQ1ZWFmYzVjZTBlODA1MTYxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
      />
      <AboutProject wrappingClassName="wrapper second" />
      <IFrame
        wrappingClassName="wrapper first"
        title={t("iframeTitles.howToVolunteer")}
        src="https://www.youtube.com/embed/tk5akHPd9oo?si=k01Klx7SxIWwKHO_&rel=0&autoplay=0"
      />
      <VolunteerWorkflow wrappingClassName="wrapper second" />
      <ContactForRAC wrappingClassName="wrapper first" />
      <Footer />
    </>
  );
}

export default Home;
