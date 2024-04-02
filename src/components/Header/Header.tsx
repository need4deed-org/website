import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  /* TODO: dropdown doesn't look integrated when it's open. Make it pretty :) */
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
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
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#volunteer-opportunities">
                {t("workingWithRefugees")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={t("basLink")}>
                {t("bas2022")}
              </a>
            </li>
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
                    onClick={() => handleLanguageChange("de")}
                  >
                    Deutsch
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("ar")}
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("fa")}
                  >
                    فارسی
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("ru")}
                  >
                    Русский
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
