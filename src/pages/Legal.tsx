import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import DataPrivacy from "../components/Legal/DataPrivacy";
import LegalNotice from "../components/Legal/Notice";
import { Lang, Legals } from "../types";
import { isEnumValue } from "../utils";

interface Props {
  type: Legals;
}

function Legal({ type }: Props) {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEnumValue(Lang, lng)) i18n.changeLanguage(lng);
    else {
      navigate(`/${type}/${Lang.EN}`, { replace: true });
    }
  }, [i18n, lng, navigate, type]);

  const component = (type: Legals) => {
    switch (type) {
      case Legals.DATA_PROTECTION:
        return <DataPrivacy />;
      case Legals.NOTICE:
        return <LegalNotice />;
    }
  };

  return (
    <div className="app-container">
      <div className="navbar-main-container">
        <Header />
      </div>
      {component(type)}
      <Footer />
    </div>
  );
}

export default Legal;
