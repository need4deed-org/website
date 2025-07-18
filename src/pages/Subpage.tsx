import { Lang } from "need4deed-sdk";
import { useContext, useEffect } from "react";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { showEvent } from "../config/constants";
import { Subpages } from "../config/types";
import AppContainerContext from "../contexts/AppContainerContext";
import { getImageUrl, isEnumValue, setLangDirection } from "../utils";

interface Props {
  type: Subpages;
}

function Subpage({ type }: Props) {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();
  const containerRef = useContext(AppContainerContext);

  useEffect(() => {
    if (isEnumValue(Lang, lng)) {
      i18n.changeLanguage(lng);
      setLangDirection(containerRef, lng as Lang);
    } else {
      navigate(`/${type}/${Lang.EN}`, { replace: true });
    }
    ReactGA.send({
      hitType: "pageview",
      page: `/${type}/`,
      title: `Visited ${type}`,
    });
  }, [containerRef, i18n, lng, navigate, type]);

  const component = (pageType: Subpages) => {
    switch (pageType) {
      default:
        return null;
    }
  };

  const navbarMainContainerStyle = {
    backgroundImage: `url(${getImageUrl("need4deed.webp")})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="navbar-main-container" style={navbarMainContainerStyle}>
        <Header showEvent={showEvent} />
      </div>
      {component(type)}
      <Footer />
    </>
  );
}

export default Subpage;
