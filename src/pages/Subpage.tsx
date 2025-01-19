import { useContext, useEffect } from "react";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import Announcement from "../components/Announcement";
import EventHolidayGift from "../components/Event/EventHolidayGift";
import Footer from "../components/Footer/Footer";
import NewForm from "../components/Form";
import opportunity from "../components/Form/opportunity";
import volunteer from "../components/Form/volunteer";
import Form from "../components/forms";
import Header from "../components/Header/Header";
import Agreement from "../components/Legal/Agreement";
import DataPrivacy from "../components/Legal/DataPrivacy";
import Guidelines from "../components/Legal/Guidelines";
import LegalNotice from "../components/Legal/Notice";
import OpportunityCards from "../components/OpportunityCards";
import { FF, showEvent, urlApiOpportunity } from "../config/constants";
import { FormType, Lang, OpportunityType, Subpages } from "../config/types";
import AppContainerContext from "../contexts/AppContainerContext";
import { getImageUrl, isEnumValue, setLangDirection } from "../utils";
import Cookie from "../components/Legal/Cookies";
import FAQs from "../components/FAQs/FAQs";

interface Props {
  type: Subpages;
}

function Subpage({ type }: Props) {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const [ffNewForm] = useSearchParams();
  const navigate = useNavigate();
  const containerRef = useContext(AppContainerContext);

  const ffOpp = ffNewForm.get("opp");
  const ffVol = ffNewForm.get("vol");

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
              id: "id",
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
              id: "id",
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
              id: "id",
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
              id: "id",
              type: "activities",
              name: "title",
              languages: "languages",
              time: "accomp_datetime",
              location: "berlin_locations",
              vo: "vo_information",
            }}
          />
        );
      case Subpages.BECOME_VOLUNTEER:
        return FF.NEW_FORMS_VOLUNTEER || ffVol ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <NewForm<typeof volunteer.defaultValues> {...volunteer} />
        ) : (
          <Form form={FormType.VOLUNTEER} />
        );
      case Subpages.ADD_OPPORTUNITY:
        return FF.NEW_FORMS_OPPORTUNITY || ffOpp ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <NewForm<typeof opportunity.defaultValues> {...opportunity} />
        ) : (
          <Form form={FormType.OPPORTUNITY} />
        );
      case Subpages.ANNOUNCEMENT:
        return <Announcement />;
      case Subpages.EVENT:
        return <EventHolidayGift />;
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
