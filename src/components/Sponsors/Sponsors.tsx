import useMatchMedia from "../../hooks/useMatchMedia";
import "./Sponsors.css";
import euAndBer from "/images/EU-and-BER.jpg";
// import berlin from "/images/berlin-beaufragte-intergration-migration.jpg";
import clubDialog from "/images/club-dialog.jpg";
// import eu from "/images/europaeischen-union.jpg";
import schoenebergHilft from "/images/schoeneberg-hilft.jpg";
import allSponsors from "/images/sponsers-partners.jpg";

interface Props {
  wrappingClassName: string;
}

function Sponsors({ wrappingClassName }: Props) {
  const isMobile = useMatchMedia("(max-width: 768px)");

  return (
    <div className={wrappingClassName}>
      {isMobile ? (
        <div className="sponsor-img-container flex-column">
          <img className="img-width" src={euAndBer} alt="EU-and-BER" />
          <span />
          <img className="img-width" src={clubDialog} alt="Club Dialog" />
          <span />
          <img
            className="img-width"
            src={schoenebergHilft}
            alt="Schöneberg Hilft"
          />
          <span />
          {/* <img className="img-width" src={eu} alt="EU" /> */}
          <span />
          {/* <img className="img-width" src={berlin} alt="Berlin" /> */}
        </div>
      ) : (
        <div className="sponsor-img-container">
          <img className="img-width" src={allSponsors} alt="all-sponsors" />
        </div>
      )}
    </div>
  );
}

export default Sponsors;
