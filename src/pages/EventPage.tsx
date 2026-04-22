import { useEffect } from "react";

const EVENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSft1xi4NrQB_O6-OyOvVm_HcDSzQtog_3MMj2XAIVNaLKEJxA/viewform?usp=dialog";

export default function EventPage() {
  useEffect(() => {
    window.location.replace(EVENT_FORM_URL);
  }, []);

  return null;
}
