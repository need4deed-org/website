import useMatchMedia from "../../hooks/useMatchMedia";
import "./Sponsors.css";
import berlin from "/images/berlin-beaufragte-intergration-migration.jpg";
import clubDialog from "/images/club-dialog.jpg";
import eu from "/images/europaeischen-union.jpg";
import schoenebergHilft from "/images/schoeneberg-hilft.jpg";
import allSponsors from "/images/sponsers-partners.jpg";

function Sponsors() {
  const isMobile = useMatchMedia();

  return (
    <div className="wrapper">
      {isMobile ? (
        <div className="sponsor-img-container flex-column">
          <img className="img-width" src={clubDialog} alt="Club Dialog" />
          <span />
          <img
            className="img-width"
            src={schoenebergHilft}
            alt="Schöneberg Hilft"
          />
          <span />
          <img className="img-width" src={eu} alt="EU" />
          <span />
          <img className="img-width" src={berlin} alt="Berlin" />
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
