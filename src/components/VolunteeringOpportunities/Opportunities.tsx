import OpportunityCard from "./OpportunityCard";
import { Opportunitiy } from "./types";
import { OpportunitiesContainer } from "../styled/containers";
import { IconName } from "../VolunteeringCategories/types";
import useResponsive from "../../hooks/useResponsive";
import { screenSizeThresholds } from "../../config/constants";

const opportunities: Opportunitiy[] = [
  {
    iconName: IconName.Baby,
    title: "Tutor and assist children with homework",
    description:
      "Support children living in the accommodation centre with tutoring!",
    languages: ["French", "German", "Georgian", "Turkish", "Arabic"],
    schedule: { type: "Flexible", dates: ["16-20:00"] },
    district: "Treptown",
    activities: ["tutoring", "translate"],
  },
  {
    iconName: IconName.Users,
    title: "Support queer refugees with getting to know Berlin",
    description:
      "You’ll support one person within their first weeks in Berlin, show them around and give them information about fun queer spaces in Berlin.",
    languages: ["Spanish", "Dari", "Georgian", "Turkish", "Arabic"],
    schedule: {
      type: "Flexible",
      dates: ["Mondays 17-20:00", "Fridays 17:00-20:00"],
    },
    district: "Berlin",
    activities: ["way/path accompanying"],
  },
  {
    iconName: IconName.Bicycle,
    title: "Participate in our bicycle workshop",
    description:
      "Bring your skills to our bicycle workshop and repair bicycles together with the residents.",
    languages: ["German", "English", "Turkish"],
    schedule: { type: "Flexible" },
    district: "Munih",
    activities: ["unique skills"],
  },
];

function Opportunities() {
  const isSmallScreen = useResponsive(screenSizeThresholds.desktop);
  const trancuteNumber = isSmallScreen ? 2 : 3;

  return (
    <OpportunitiesContainer id="opportunities-container">
      {opportunities.slice(0, trancuteNumber).map((opp) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <OpportunityCard key={opp.title} {...opp} />
      ))}
    </OpportunitiesContainer>
  );
}

export default Opportunities;
