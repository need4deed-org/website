import sponsors from '/public/sponsers-partners.jpg'
import './Sponsors.css';

function Sponsors() {
  return (
    <div className='sponsor-img-container'>
    <img className='sponsor-img' src={sponsors} alt="sponsors-image" />
  </div>
  )
}

export default Sponsors
