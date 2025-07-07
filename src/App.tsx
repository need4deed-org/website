import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import JsonLd from "./components/JsonLd";
import { TestLayout } from "./components/Layouts/TestLayout";
import { googleAnalyticsId } from "./config/constants";
import { Subpages } from "./config/types";
import AppContainerContext from "./contexts/AppContainerContext";
import About from "./pages/About";
import DataPrivacy from "./pages/DataPrivacy";
import EventPage from "./pages/EventPage";
import FAQ from "./pages/FAQ";
import GuidelinesPage from "./pages/GuidelinesPage";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import LegalNotice from "./pages/LegalNotice";
import Opportunities from "./pages/Opportunities";
import OpportunityForm from "./pages/OpportunityForm";
import Subpage from "./pages/Subpage";
import VolunteerForm from "./pages/VolunteerForm";
import Agreement from "./pages/VPA";
import { consoleLogDeveloperContributionMessage } from "./utils";

const queryClient = new QueryClient();

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

  consoleLogDeveloperContributionMessage();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainerContext.Provider value={containerRef}>
        <JsonLd />
        <BrowserRouter>
          <div ref={containerRef} className="app-container">
            <Routes>
              <Route path="/" element={<Landing />} />

              <Route path={`/${Subpages.FAQ}`} element={<FAQ />} />
              <Route path={`/${Subpages.ABOUT}`} element={<About />} />
              <Route
                path={`/${Subpages.LEGAL_NOTICE}`}
                element={<LegalNotice />}
              />
              <Route
                path={`/${Subpages.DATA_PRIVACY}`}
                element={<DataPrivacy />}
              />
              <Route path={`/${Subpages.VPA}`} element={<Agreement />} />
              <Route
                path={`/${Subpages.OPPORTUNITY_CARDS}`}
                element={<Opportunities />}
              />
              <Route
                path={`/${Subpages.OPPORTUNITY_FORM}`}
                element={<OpportunityForm />}
              />
              <Route
                path={`/${Subpages.OPPORTUNITY_FORM_LEGACY}`}
                element={<OpportunityForm />}
              />
              <Route
                path={`/${Subpages.OPPORTUNITY_FORM_LEGACY}/:lng`}
                element={<OpportunityForm />}
              />
              <Route
                path={`/${Subpages.VOLUNTEER_FORM}`}
                element={<VolunteerForm />}
              />
              <Route
                path={`/${Subpages.RAC_GUIDELINES}`}
                element={<GuidelinesPage />}
              />
              <Route path={`/${Subpages.EVENT_PAGE}`} element={<EventPage />} />
              <Route path="/:lng" element={<Landing />} />
              <Route
                path="/new/static-page-layout-test"
                element={<TestLayout />}
              />
              <Route path="*" element={<Landing />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContainerContext.Provider>{" "}
    </QueryClientProvider>
  );
}

export default App;
