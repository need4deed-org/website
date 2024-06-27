import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { AppContainerContext } from "../App";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import DataPrivacy from "../components/Legal/DataPrivacy";
import LegalNotice from "../components/Legal/Notice";
import OpportunityCards from "../components/OpportunityCards";
import { Lang, Subpages } from "../types";
import { isEnumValue, setLangDirection } from "../utils";

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
  }, [containerRef, i18n, lng, navigate, type]);

  const component = (type: Subpages) => {
    switch (type) {
      case Subpages.DATA_PROTECTION:
        return <DataPrivacy />;
      case Subpages.NOTICE:
        return <LegalNotice />;
      case Subpages.OPPORTUNITIES:
        return (
          <OpportunityCards
            dataFileUrl="/data/opportunities.json"
            filterTarget={[
              {
                key: "Status",
                values: ["Volunteers Needed", "Search in process"],
              },
            ]}
            keyMap={{
              type: "type",
              name: "name",
              languages: "languages",
              time: "schedule",
              location: "district",
            }}
          />
        );
      case Subpages.TRANSLATIONS:
        return (
          <OpportunityCards
            dataFileUrl="/data/translations.json"
            filterTarget={[
              { key: "Status", values: ["Confirmed with the RAC"] },
              { key: "Active volunteers", values: [""] },
            ]}
            keyMap={{
              type: "appointment",
              name: "name",
              languages: "languages",
              time: "date",
              location: "district",
            }}
          />
        );
    }
  };

  return (
    <>
      <div className="navbar-main-container">
        <Header showTranslations={type === Subpages.OPPORTUNITIES} />
      </div>
      {component(type)}
      <Footer />
    </>
  );
}

export default Subpage;
