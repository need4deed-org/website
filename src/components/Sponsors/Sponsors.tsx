import useMediaWidth from '../../hooks/useMediaWidth';
import './Sponsors.css';
import berlin from '/images/berlin-beaufragte-intergration-migration.jpg';
import clubDialog from '/images/club-dialog.jpg';
import eu from '/images/europaeischen-union.jpg';
import schoenebergHilft from '/images/schoeneberg-hilft.jpg';
import allSponsors from '/images/sponsers-partners.jpg';

function Sponsors() {
  const isMobile = useMediaWidth();

  return (
    <>
      {isMobile ? (
        <div className='sponsor-img-container flex-column'>
          <img className='sponsor-img' src={clubDialog} alt='sponsors-image' />
          <span />
          <img
            className='sponsor-img'
            src={schoenebergHilft}
            alt='sponsors-image'
          />
          <span />
          <img className='sponsor-img' src={eu} alt='sponsors-image' />
          <span />
          <img className='sponsor-img' src={berlin} alt='sponsors-image' />
        </div>
      ) : (
        <div className='sponsor-img-container'>
          <img className='sponsor-img' src={allSponsors} alt='sponsors-image' />
        </div>
      )}
    </>
  );
}

export default Sponsors;
