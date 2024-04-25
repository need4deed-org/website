import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Lang } from "../../types";
import { getBaseUrl } from "../../utils";
import "./Header.css";

function Header() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleLanguageChange = (lng: Lang) => {
    navigate(`${getBaseUrl(window.location.href)}/${lng}`);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a href={`/${i18n.language}`}>
          <span className="home-icon"></span>
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
          <span
            className={`navbar-toggler-icon ${isOpen ? "d-none" : ""}`}
          ></span>
          <span
            className={`fa-solid fa-xmark ${isOpen ? "" : "d-none"}`}
          ></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          // id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-0">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
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
                    onClick={() => handleLanguageChange(Lang.DE)}
                  >
                    Deutsch
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange(Lang.EN)}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange(Lang.AR)}
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange(Lang.FA)}
                  >
                    فارسی
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange(Lang.RU)}
                  >
                    Русский
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#volunteer-opportunities">
                {t("workingWithRefugees")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={t("basLink")} target="_blank">
                {t("bas2022")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
