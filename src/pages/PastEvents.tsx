import { useParams } from "react-router-dom";
import Event831 from "../components/Event/Event831";
import { Events } from "../config/types";

export default function PastEvents() {
  const { event } = useParams();

  function renderEvent(eventName: string | undefined) {
    switch (eventName) {
      case Events.EVENT_8_31_24:
        return <Event831 />;
      default:
        return <div>&ldquo;There&apos;s nothing to show!&rdquo;</div>;
    }
  }

  return <>{renderEvent(event)}</>;
}
