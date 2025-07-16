import "./index.css";
import { useTranslation } from "react-i18next";

import { Accordion } from "react-bootstrap";

function DataPrivacy() {
  const { t } = useTranslation();

  return (
    <div className="n4d-container legal-container">
      <h1>{t("legal:dataPrivacy.header")}</h1>
      <p>{t("legal:dataPrivacy.intro1")}</p>

      <div className="max-w-3xl mx-auto p-6 font-sans">
        <Accordion>
          <Accordion.Header>
            <h2>
              <span className="accordion-header">01 </span>
              {t("legal:dataPrivacy.accordion-1.header")}
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>{t("legal:dataPrivacy.accordion-1.part1")}</p>
            <br />
            <p>{t("legal:dataPrivacy.accordion-1.part2")}</p>
            <br />
            <p>{t("legal:dataPrivacy.accordion-1.part3")}</p>
            <a href="https://www.club-dialog.de/">
              {t("legal:dataPrivacy.accordion-1.link1")}
              <span className="accordion-header">
                {t("legal:dataPrivacy.accordion-1.link2")}
              </span>
            </a>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            <h2>
              <span className="accordion-header">02 </span>
              {t("legal:dataPrivacy.accordion-2.header")}
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>{t("legal:dataPrivacy.accordion-2.part1")}</p>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            <h2>
              <span className="accordion-header">03 </span>
              {t("legal:dataPrivacy.accordion-3.header")}
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <h4>Description and Scope</h4>
            <p>{t("legal:dataPrivacy.accordion-3.part1")}</p>
            <p>{t("legal:dataPrivacy.accordion-3.part2")}</p>
            <br />
            <p>{t("legal:dataPrivacy.accordion-3.part3")}</p>
            <p>
              <span> ALL-INKL.COM </span>
              {t("legal:dataPrivacy.accordion-3.part4")}
            </p>
            <p>
              <span> {t("legal:dataPrivacy.accordion-3.linkh")} </span>
              <a href="https://all-inkl.com/datenschutzinformationen/">
                <span className="accordion-header">
                  {t("legal:dataPrivacy.accordion-3.link1")}
                </span>
              </a>
            </p>
            <h4>{t("legal:dataPrivacy.accordion-3.head1")}</h4>
            <p>{t("legal:dataPrivacy.accordion-3.h-1")}</p>
            <h4>{t("legal:dataPrivacy.accordion-3.head2")}</h4>
            <p>{t("legal:dataPrivacy.accordion-3.h-2")}</p>
            <h4>{t("legal:dataPrivacy.accordion-3.head3")}</h4>
            <p>{t("legal:dataPrivacy.accordion-3.h-3")}</p>
            <h4>{t("legal:dataPrivacy.accordion-3.head4")}</h4>
            <p>{t("legal:dataPrivacy.accordion-3.h-4")}</p>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            <h2>
              <span className="accordion-header">04 </span>
              {t("legal:dataPrivacy.accordion-4.header")}
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <h4>Description and Scope</h4>
            <p>{t("legal:dataPrivacy.accordion-4.part1")}</p>
            <br />
            <p>{t("legal:dataPrivacy.accordion-4.part2")}</p>
            <br />
            <p>
              <b className="accordion-header"> ━ </b> &nbsp; &nbsp; &nbsp;
              {t("legal:dataPrivacy.accordion-4.part3")}
            </p>
            <p>
              <b className="accordion-header"> ━ </b> &nbsp; &nbsp; &nbsp;
              {t("legal:dataPrivacy.accordion-4.part4")}
            </p>
            <p>
              <b className="accordion-header"> ━ </b> &nbsp; &nbsp; &nbsp;
              {t("legal:dataPrivacy.accordion-4.part5")}
            </p>
            <p>
              <b className="accordion-header"> ━ </b> &nbsp; &nbsp; &nbsp;
              {t("legal:dataPrivacy.accordion-4.part6")}
            </p>
            <p>
              <b className="accordion-header"> ━ </b> &nbsp; &nbsp; &nbsp;
              {t("legal:dataPrivacy.accordion-4.part7")}
            </p>

            <h4>{t("legal:dataPrivacy.accordion-4.head1")}</h4>
            <p>{t("legal:dataPrivacy.accordion-4.h-1")}</p>
            <h4>{t("legal:dataPrivacy.accordion-4.head2")}</h4>
            <p>{t("legal:dataPrivacy.accordion-4.h-2")}</p>
            <h4>{t("legal:dataPrivacy.accordion-4.head3")}</h4>
            <p>{t("legal:dataPrivacy.accordion-4.h-3")}</p>
            <h4>{t("legal:dataPrivacy.accordion-4.head4")}</h4>
            <p>{t("legal:dataPrivacy.accordion-4.h-4")}</p>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            <h2>
              <span className="accordion-header">05 </span>
              {t("legal:dataPrivacy.accordion-5.header")}
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <h4>Description and Scope</h4>
            <p>{t("legal:dataPrivacy.accordion-5.part1")}</p>
            <h4>{t("legal:dataPrivacy.accordion-5.head1")}</h4>
            <p>{t("legal:dataPrivacy.accordion-5.h-1")}</p>
            <h4>{t("legal:dataPrivacy.accordion-5.head2")}</h4>
            <p>{t("legal:dataPrivacy.accordion-5.h-2")}</p>
            <h4>{t("legal:dataPrivacy.accordion-5.head3")}</h4>
            <p>{t("legal:dataPrivacy.accordion-5.h-3")}</p>
            <h4>{t("legal:dataPrivacy.accordion-5.head4")}</h4>
            <p>{t("legal:dataPrivacy.accordion-5.h-4")}</p>
            <p>test</p>
          </Accordion.Body>
        </Accordion>
      </div>
    </div>
  );
}

export default DataPrivacy;
