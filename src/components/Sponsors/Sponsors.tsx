import useMatchMedia from "../../hooks/useMatchMedia";
import "./Sponsors.css";
import { getImageUrl } from "../../utils/index"

interface Props {
  wrappingClassName: string;
}

const euAndBer = getImageUrl("EU-and-BER.webp");
const clubDialog = getImageUrl("club-dialog.webp");
const schoenebergHilft = getImageUrl("schoeneberg-hilft.webp");
const allSponsors = getImageUrl("sponsors-partners.webp");


function Sponsors({ wrappingClassName }: Props) {
  const isMobile = useMatchMedia("(max-width: 768px)");

  return (
    <div className={wrappingClassName}>
      {isMobile ? (
        <div className="sponsor-img-container flex-column">
          <img className="img-width" src={euAndBer} alt="European Union and Berlin logo" loading="lazy" />
          <span />
          <img className="img-width" src={clubDialog} alt="Club Dialog logo" loading="lazy"/>
          <span />
          <img
            className="img-width"
            src={schoenebergHilft}
            alt="Schöneberg Hilft logo"
            loading="lazy"
          />
          <span />
          <span />
        </div>
      ) : (
        <div className="sponsor-img-container">
          <img className="img-width" src={allSponsors} alt="All project sponsors together" loading="lazy"/>
        </div>
      )}
    </div>
  );
}

export default Sponsors;
