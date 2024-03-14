import './VolunteerOpportunity.css'

function VolunteerOpportunity() {
  return (
    <>
    <div className='volunteer-opportunity-container'>
      <div className='volunteer-opportunity-heading'>
        <h3>Freiwilligenarbeit mit Geflüchteten</h3>
      </div>
      <div className='img-container'>
       <div className='become-a-mentor-img volunteer-opportunity-img'>
        <div className='volunteer-opportunity-text'>
        <h5>Hürden gemeinsam überwinden!</h5>
        <p>Im Projekt Hürdenspringer in Tempelhof-Schöneberg lernst Du neue Menschen kennen und unterstützt sie dabei, in Berlin Fuß zu fassen, ihr Hobby auszuüben oder sich einzubringen.
        </p>
        </div>
        </div>
       <div className='child-care-img volunteer-opportunity-img'> 
       <div className='volunteer-opportunity-text'>
        <h5>Kinderbetreuung</h5>
        <p>In verschiedenen Unterkünften für Geflüchtete gibt es Freizeitangebote für Kinder. Für diese suchen wir Freiwillige, die bereits Erfahrungen in der Arbeit mit Kinder- und Jugendlichen haben.
        </p>
        </div></div>
       <div className='sport-programmes-img volunteer-opportunity-img'> 
       <div className='volunteer-opportunity-text'>
        <h5>Sportangebote</h5>
        <p>Für Gemeinschaftsunterkünfte suchen wir Freiwillige, die uns dabei helfen Sportangebote für Kinder und Jugendliche zu organisieren!
        </p>
        </div></div>
      </div>
    </div>
    </>
  )
}

export default VolunteerOpportunity;
