import { useEffect, useRef } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import JsonLd from "./components/JsonLd";
import { googleAnalyticsId } from "./config/constants";
import { Subpages } from "./config/types";
import AppContainerContext from "./contexts/AppContainerContext";
import Home from "./pages/Home";
import Land404 from "./pages/Land404";
import PastEvents from "./pages/PastEvents";
import Subpage from "./pages/Subpage";

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cookieConsent = getCookieConsentValue();

  useEffect(() => {
    fetch("/version.json")
      /* eslint-disable no-console */
      .then((response) => response.json())
      .then((data) => console.log("Current version:", data.commitHash))
      .catch((error) => console.error("Failed to load version info:", error));
    /* eslint-enable no-console */

    if (cookieConsent === "true") {
      ReactGA.initialize(googleAnalyticsId);
    }
  }, [cookieConsent]);

  return (
    <AppContainerContext.Provider value={containerRef}>
      <JsonLd />
      <div ref={containerRef} className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path={`/${Subpages.NOTICE}/:lng`}
              element={<Subpage type={Subpages.NOTICE} />}
            />
            <Route
              path={`/${Subpages.NOTICE}`}
              element={<Subpage type={Subpages.NOTICE} />}
            />
            <Route
              path={`/${Subpages.DATA_PROTECTION}/:lng`}
              element={<Subpage type={Subpages.DATA_PROTECTION} />}
            />
            <Route
              path={`/${Subpages.DATA_PROTECTION}`}
              element={<Subpage type={Subpages.DATA_PROTECTION} />}
            />
            <Route
              path={`/${Subpages.AGREEMENT}/:lng`}
              element={<Subpage type={Subpages.AGREEMENT} />}
            />
            <Route
              path={`/${Subpages.AGREEMENT}`}
              element={<Subpage type={Subpages.AGREEMENT} />}
            />
            <Route
              path={`/${Subpages.GUIDELINES}/:lng`}
              element={<Subpage type={Subpages.GUIDELINES} />}
            />
            <Route
              path={`/${Subpages.GUIDELINES}`}
              element={<Subpage type={Subpages.GUIDELINES} />}
            />
            <Route
              path={`/${Subpages.OPPORTUNITIES}/:lng`}
              element={<Subpage type={Subpages.OPPORTUNITIES} />}
            />
            <Route
              path={`/${Subpages.OPPORTUNITIES}`}
              element={<Subpage type={Subpages.OPPORTUNITIES} />}
            />
            <Route
              path={`/${Subpages.ACCOMPANYING}/:lng`}
              element={<Subpage type={Subpages.ACCOMPANYING} />}
            />
            <Route
              path={`/${Subpages.ACCOMPANYING}`}
              element={<Subpage type={Subpages.ACCOMPANYING} />}
            />
            <Route
              path={`/${Subpages.ACCOMPANYING_TEST}/:lng`}
              element={<Subpage type={Subpages.ACCOMPANYING_TEST} />}
            />
            <Route
              path={`/${Subpages.ACCOMPANYING_TEST}`}
              element={<Subpage type={Subpages.ACCOMPANYING_TEST} />}
            />
            <Route
              path={`/${Subpages.OPPORTUNITIES_TEST}/:lng`}
              element={<Subpage type={Subpages.OPPORTUNITIES_TEST} />}
            />
            <Route
              path={`/${Subpages.OPPORTUNITIES_TEST}`}
              element={<Subpage type={Subpages.OPPORTUNITIES_TEST} />}
            />
            <Route
              path={`/${Subpages.BECOME_VOLUNTEER}/:lng`}
              element={<Subpage type={Subpages.BECOME_VOLUNTEER} />}
            />
            <Route
              path={`/${Subpages.BECOME_VOLUNTEER}`}
              element={<Subpage type={Subpages.BECOME_VOLUNTEER} />}
            />
            <Route
              path={`/${Subpages.ANNOUNCEMENT}/:lng`}
              element={<Subpage type={Subpages.ANNOUNCEMENT} />}
            />
            <Route
              path={`/${Subpages.ADD_OPPORTUNITY}`}
              element={<Subpage type={Subpages.ADD_OPPORTUNITY} />}
            />
            <Route
              path={`/${Subpages.ADD_OPPORTUNITY}/:lng`}
              element={<Subpage type={Subpages.ADD_OPPORTUNITY} />}
            />
            <Route
              path={`/${Subpages.EVENT}/:lng`}
              element={<Subpage type={Subpages.EVENT} />}
            />
            <Route
              path={`/${Subpages.EVENT}`}
              element={<Subpage type={Subpages.EVENT} />}
            />
            <Route
              path={`/${Subpages.PAST_EVENTS}/:event`}
              element={<PastEvents />}
            />
            <Route
              path={`/${Subpages.FAQS}/:lng`}
              element={<Subpage type={Subpages.FAQS} />}
            />
            <Route path="/:lng" element={<Home />} />
            <Route path="*" element={<Land404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContainerContext.Provider>
  );
}

export default App;
