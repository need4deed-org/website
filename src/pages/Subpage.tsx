import { Lang } from "need4deed-sdk";
import { useContext, useEffect, useMemo } from "react";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import Announcement from "../components/Announcement";
import Event from "../components/Event/Event";
import Events from "../components/Event/Events";
import FAQs from "../components/FAQs/FAQs";
import Footer from "../components/Footer/Footer";
import Form from "../components/forms";
import { FormType } from "../components/forms/types";
import Header from "../components/Header/Header";
import Agreement from "../components/Legal/Agreement";
import Cookie from "../components/Legal/Cookies";
import DataPrivacy from "../components/Legal/DataPrivacy";
import Guidelines from "../components/Legal/Guidelines";
import LegalNotice from "../components/Legal/Notice";
import { showEvent } from "../config/constants";
import { Subpages } from "../config/types";
import AppContainerContext from "../contexts/AppContainerContext";
import useEvents from "../hooks/api/useEvents";
import { getImageUrl, isEnumValue, setLangDirection } from "../utils";

interface Props {
  type: Subpages;
}

function Subpage({ type }: Props) {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();
  const containerRef = useContext(AppContainerContext);
  const [events] = useEvents(i18n.language as Lang);

  const eventActive = useMemo(
    () => events?.find((event) => event.active),
    [events],
  );

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
      case Subpages.DATA_PROTECTION:
        return <DataPrivacy />;
      case Subpages.NOTICE:
        return <LegalNotice />;
      case Subpages.AGREEMENT:
        return <Agreement />;
      case Subpages.GUIDELINES:
        return <Guidelines />;
      case Subpages.BECOME_VOLUNTEER:
        return <Form form={FormType.VOLUNTEER} />;
      case Subpages.ADD_OPPORTUNITY:
        return <Form form={FormType.OPPORTUNITY} />;
      case Subpages.ANNOUNCEMENT:
        return <Announcement />;
      case Subpages.EVENT:
        return <Event eventData={{ event: eventActive }} />;
      case Subpages.EVENTS:
        return <Events />;
      case Subpages.COOKIES:
        return <Cookie />;
      case Subpages.FAQS:
        return <FAQs />;
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
