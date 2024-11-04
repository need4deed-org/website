import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import ReactGA from "react-ga4";

import { AppContainerContext } from "../App";
import Announcement from "../components/Announcement";
import BecomeVolunteer from "../components/BecomeVolunteer";
import EventHolidayGift from "../components/Event/EventHolidayGift";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Agreement from "../components/Legal/Agreement";
import DataPrivacy from "../components/Legal/DataPrivacy";
import LegalNotice from "../components/Legal/Notice";
import OpportunityCards from "../components/OpportunityCards";
import { showEvent, urlApiOpportunity } from "../config/constants";
import { Lang, OpportunityType, Subpages } from "../config/types";
import { isEnumValue, setLangDirection } from "../utils";
import { getImageUrl } from "../utils/index";

interface Props {
  type: Subpages;
}

function Subpage({ type }: Props) {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();
  const containerRef = useContext(AppContainerContext);

  useEffect(() => {
    urlApiOpportunity;
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

  const component = (type: Subpages) => {
    switch (type) {
      case Subpages.DATA_PROTECTION:
        return <DataPrivacy />;
      case Subpages.NOTICE:
        return <LegalNotice />;
      case Subpages.AGREEMENT:
        return <Agreement />;
      case Subpages.ACCOMPANYING_TEST:
        return (
          <OpportunityCards
            url="/data/accompanying.json"
            opportunityParams={{
              search: {
                Status: ["Not started"],
              },
            }}
            keyMap={{
              type: "appointment",
              name: "name",
              languages: "languages", // need to combine refugee lang and lang translation lang
              time: "date",
              location: "district",
            }}
          />
        );
      case Subpages.OPPORTUNITIES_TEST:
        return (
          <OpportunityCards
            url="/data/opportunities.json"
            opportunityParams={{
              search: {
                Status: ["Volunteers Needed", "Search in process"],
              },
              primaryKeys: ["title", "name"],
            }}
            keyMap={{
              type: "type",
              name: "name",
              languages: "languages",
              time: "schedule",
              location: "district",
              vo: "vo",
            }}
          />
        );
      case Subpages.OPPORTUNITIES:
        return (
          <OpportunityCards
            url={urlApiOpportunity}
            opportunityParams={{
              search: {
                status: ["Volunteers Needed", "Search in process"],
                opportunity_type: [OpportunityType.GENERAL],
              },
              primaryKeys: ["title", "name"],
            }}
            keyMap={{
              type: "activities",
              name: "title",
              languages: "languages",
              time: "schedule_str",
              location: "berlin_locations",
              vo: "vo_information",
            }}
          />
        );
      case Subpages.ACCOMPANYING:
        return (
          <OpportunityCards
            url={urlApiOpportunity}
            opportunityParams={{
              search: {
                status: ["Search in process", "Not started"],
                opportunity_type: [OpportunityType.ACCOMPANYING],
              },
              primaryKeys: ["title", "name"],
            }}
            keyMap={{
              type: "activities",
              name: "title",
              languages: "languages",
              time: "datetime_str",
              location: "berlin_locations",
              vo: "vo_information",
            }}
          />
        );
      case Subpages.BECOME_VOLUNTEER:
        return <BecomeVolunteer />;
      case Subpages.THANK_YOU:
        return <Announcement copies="becomeVolunteer.thanksVolunteer" />;
      case Subpages.EVENT:
        return <EventHolidayGift />;
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
