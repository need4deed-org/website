import { Trans, useTranslation } from "react-i18next";

import { getImageUrl } from "../../utils";
import "./index.css";

export default function Guidelines() {
  const { t } = useTranslation();

  return (
    <div className="n4d-container legal-container">
      <h2>{t("legal:guidlaines.header")}</h2>
      <p>{t("legal:guidlaines.intro")}</p>
      {/*  */}
      <h3>{t("legal:guidlaines.volunteering.header")}</h3>
      <h6>{t("legal:guidlaines.volunteering.collection.header")}</h6>
      <ul>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.collection.para1"
          />
        </li>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.collection.para2"
          />
        </li>
      </ul>
      <h6>{t("legal:guidlaines.volunteering.agency.header")}</h6>
      <ul>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.agency.para1"
          />
        </li>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.agency.para2"
          />
        </li>
      </ul>
      <h6>{t("legal:guidlaines.volunteering.introduction.header")}</h6>
      <ul>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.introduction.para"
          />
        </li>
      </ul>
      <h6>{t("legal:guidlaines.volunteering.feedback.header")}</h6>
      <ul>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.feedback.para1"
          />
        </li>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.feedback.para2"
          />
        </li>
      </ul>
      <h6>{t("legal:guidlaines.volunteering.visits.header")}</h6>
      <ul>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.volunteering.visits.para"
          />
        </li>
      </ul>
      <h3>{t("legal:guidlaines.application.header")}</h3>
      <p>{t("legal:guidlaines.application.para1")}</p>
      <ul>
        <li>{t("legal:guidlaines.application.para2")}</li>
        <li>{t("legal:guidlaines.application.para3")}</li>
        <li>{t("legal:guidlaines.application.para4")}</li>
        <li>{t("legal:guidlaines.application.para5")}</li>
        <li>{t("legal:guidlaines.application.para6")}</li>
      </ul>
      <h6>{t("legal:guidlaines.application.support.header")}</h6>
      <p>
        <Trans
          components={{ b: <b /> }}
          i18nKey="legal:guidlaines.application.support.para"
        />
      </p>
      <h6>{t("legal:guidlaines.application.usage.header")}</h6>
      <p>
        <Trans
          components={{ b: <b /> }}
          i18nKey="legal:guidlaines.application.usage.para"
        />
      </p>
      <h6>{t("legal:guidlaines.application.requirements.header")}</h6>
      <p>{t("legal:guidlaines.application.requirements.para1")}</p>
      <ul>
        <li>{t("legal:guidlaines.application.requirements.para2")}</li>
        <li>{t("legal:guidlaines.application.requirements.para3")}</li>
        <li>{t("legal:guidlaines.application.requirements.para4")}</li>
        <li>{t("legal:guidlaines.application.requirements.para5")}</li>
        <li>{t("legal:guidlaines.application.requirements.para6")}</li>
      </ul>
      <h6>{t("legal:guidlaines.application.procedure.header")}</h6>
      <ul>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.application.procedure.para1"
          />
        </li>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.application.procedure.para2"
          />
        </li>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.application.procedure.para3"
          />
        </li>
        <li>
          <Trans
            components={{ b: <b /> }}
            i18nKey="legal:guidlaines.application.procedure.para4"
          />
        </li>
      </ul>
      <p>{t("legal:guidlaines.outro")}</p>
      <br />
      <p>{t("legal:guidlaines.greetings")}</p>
      <img
        height={24}
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        alt="N4D logo"
      />
    </div>
  );
}
