import { useParams } from "react-router-dom";
import Event831 from "../components/Event/Event831";
import { Events } from "../types";

export default function PastEvents() {
  const { event } = useParams();

  function renderEvent(event: string | undefined) {
    switch (event) {
      case Events.EVENT_8_31_24:
        return <Event831 />;
    }
    return <div>"There's nothing to show!"</div>;
  }

  return <>{renderEvent(event)}</>;
}
