import { useMemo } from "react";

import { getOpportunityImg } from "../../utils";

interface Props {
  opportunity: Record<string, string>;
}

export default function Opportunity({ opportunity }: Props) {
  const srcImg = useMemo(
    () => getOpportunityImg(opportunity.type),
    [opportunity.type],
  );
  return (
    <div className="opportunity-card">
      <img src={srcImg} alt="image" />
      <h5>{opportunity.name}</h5>
      <p>{opportunity.type}</p>
      <h6>Languages:</h6>
      <p>
        <strong>{opportunity.languages}</strong>
      </p>
      <h6>Time:</h6>
      <p>{opportunity.schedule}</p>
      <h6>Location:</h6>
      <p>{opportunity.district}</p>
      <a
        className="btn btn-light"
        href="https://forms.gle/XWnU4znoAFaU9HfW9"
        target="_blank"
      >
        Become a Volunteer!
      </a>
    </div>
  );
}
