import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import JsonLd from "./components/JsonLd";
import { TestLayout } from "./components/Layouts/TestLayout";
import { FF, googleAnalyticsId } from "./config/constants";
import { Subpages } from "./config/types";
import AppContainerContext from "./contexts/AppContainerContext";
import About from "./pages/About";
import DataPrivacy from "./pages/DataPrivacy";
import FAQ from "./pages/FAQ";
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
          {FF.NEW_DESIGN_WEBSITE ? (
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          ) : (
            <div ref={containerRef} className="app-container">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path={`/${Subpages.OLD}/:lng`} element={<Home />} />
                <Route path={`/${Subpages.OLD}`} element={<Home />} />
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
                  path={`/${Subpages.EVENTS}/:lng`}
                  element={<Subpage type={Subpages.EVENTS} />}
                />
                <Route
                  path={`/${Subpages.EVENTS}`}
                  element={<Subpage type={Subpages.EVENTS} />}
                />
                <Route
                  path={`/${Subpages.COOKIES}/:lng`}
                  element={<Subpage type={Subpages.COOKIES} />}
                />
                <Route
                  path={`/${Subpages.COOKIES}`}
                  element={<Subpage type={Subpages.COOKIES} />}
                />
                <Route
                  path={`/${Subpages.FAQS}/:lng`}
                  element={<Subpage type={Subpages.FAQS} />}
                />
                <Route
                  path={`/${Subpages.FAQS}`}
                  element={<Subpage type={Subpages.FAQS} />}
                />
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
                  path={`/${Subpages.OPPORTUNITY_FORM_LEGACY}/:lng`}
                  element={<OpportunityForm />}
                />
                <Route
                  path={`/${Subpages.VOLUNTEER_FORM}`}
                  element={<VolunteerForm />}
                />
                <Route path="/:lng" element={<Landing />} />
                <Route
                  path="/new/static-page-layout-test"
                  element={<TestLayout />}
                />
                <Route path="*" element={<Landing />} />
              </Routes>
            </div>
          )}
        </BrowserRouter>
      </AppContainerContext.Provider>{" "}
    </QueryClientProvider>
  );
}

export default App;
