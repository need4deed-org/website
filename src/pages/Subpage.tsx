import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { AppContainerContext } from "../App";
import Annoucement from "../components/Announcement";
import BecomeVolunteer from "../components/BecomeVolunteer";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Agreement from "../components/Legal/Agreement";
import DataPrivacy from "../components/Legal/DataPrivacy";
import LegalNotice from "../components/Legal/Notice";
import OpportunityCards from "../components/OpportunityCards";
import { urlApi } from "../config/constants";
import { Lang, OpportunityType, Subpages } from "../config/types";
import { isEnumValue, setLangDirection } from "../utils";

const urlOpportunity = `${urlApi}/opportunity/`;

interface Props {
  type: Subpages;
}

function Subpage({ type }: Props) {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();
  const containerRef = useContext(AppContainerContext);

  useEffect(() => {
    urlOpportunity;
    if (isEnumValue(Lang, lng)) {
      i18n.changeLanguage(lng);
      setLangDirection(containerRef, lng as Lang);
    } else {
      navigate(`/${type}/${Lang.EN}`, { replace: true });
    }
  }, [containerRef, i18n, lng, navigate, type]);

  const component = (type: Subpages) => {
    switch (type) {
      case Subpages.DATA_PROTECTION:
        return <DataPrivacy />;
      case Subpages.NOTICE:
        return <LegalNotice />;
      case Subpages.AGREEMENT:
        return <Agreement />;
      case Subpages.ACCOMPANYING:
        return (
          <OpportunityCards
            dataFileUrl="/data/accompanying.json"
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
      case Subpages.OPPORTUNITIES:
        return (
          <OpportunityCards
            dataFileUrl="/data/opportunities.json"
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
      case Subpages.OPPORTUNITIES_TEST:
        return (
          <OpportunityCards
            dataFileUrl={urlOpportunity}
            opportunityParams={{
              search: { status: ["Volunteers Needed", "Search in process"] },
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
      case Subpages.BECOME_VOLUNTEER:
        return <BecomeVolunteer />;
      case Subpages.THANK_YOU:
        return <Annoucement copies="becomeVolunteer.thanksVolunteer" />;
      case Subpages.ACCOMPANYING_TEST:
        return (
          <OpportunityCards
            type={OpportunityType.ACCOMPANYING}
            dataFileUrl={urlOpportunity}
            opportunityParams={{
              search: { status: ["Not started"] },
              primaryKeys: ["title", "name"],
            }}
            keyMap={{
              type: "activities",
              name: "title",
              languages: "languages",
              time: "timeslots",
              location: "locations",
              vo: "vo_information",
            }}
          />
        );
      case Subpages.EVENT:
        return <></>;
    }
  };

  return (
    <>
      <div className="navbar-main-container">
        <Header />
      </div>
      {component(type)}
      <Footer />
    </>
  );
}

export default Subpage;
