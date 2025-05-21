import { Lang } from "need4deed-sdk";
import { useContext, useMemo, useState } from "react";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Subpages } from "../../config/types";
import AppContainerContext from "../../contexts/AppContainerContext";
import useEvents from "../../hooks/api/useEvents";
import { getBaseUrl, setLangDirection } from "../../utils";
import "./Header.css";

interface Props {
  showEvent: boolean;
}

function Header({ showEvent }: Props) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useContext(AppContainerContext);
  const [queryParams] = useSearchParams();
  const [events] = useEvents(i18n.language as Lang);

  const eventActive = useMemo(
    () => events?.find((event) => event.active),
    [events],
  );

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageChange = (lng: Lang) => {
    setLangDirection(containerRef, lng as Lang);
    navigate(
      `${getBaseUrl(window.location.href)}/${lng}${queryParams.size ? `/?${queryParams}` : ""}`,
    );
  };

  const handleAccompanyingButtonClick = () => {
    ReactGA.send({
      hitType: "buttonClick",
      title: "Accompanying Volunteering Header Button",
    });
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a href={`/${i18n.language}`} aria-label="Home">
          <span className="home-icon" />
        </a>
        <button
          className={`navbar-toggler ${isOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className={`navbar-toggler-icon ${isOpen ? "d-none" : ""}`} />
          <span className={`fa-solid fa-xmark ${isOpen ? "" : "d-none"}`} />
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show droped" : ""}`}
        >
          <ul className="navbar-nav mb-0">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                id="navbarDropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("language")}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleLanguageChange(Lang.DE)}
                  >
                    Deutsch
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleLanguageChange(Lang.EN)}
                  >
                    English
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${Subpages.OPPORTUNITIES}/${i18n.language}`}
              >
                {t("workingWithRefugees")}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${Subpages.ACCOMPANYING}/${i18n.language}`}
                onClick={handleAccompanyingButtonClick}
              >
                {t("accompanyingVolunteering")}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${Subpages.FAQS}/${i18n.language}`}
              >
                {t("faqs.faqs")}
              </a>
            </li>

            {showEvent && eventActive ? (
              <li className="nav-item">
                <a
                  className="nav-link nav-link-secondary"
                  href={`/${Subpages.EVENT}/${i18n.language}`}
                >
                  {eventActive.menuTitle}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
