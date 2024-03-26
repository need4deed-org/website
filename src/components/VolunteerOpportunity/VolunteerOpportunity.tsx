import './VolunteerOpportunity.css';


function VolunteerOpportunity() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide volunteer-opportunity-container" data-bs-ride="carousel">
      <div className='volunteer-opportunity-heading'>
        <h3 id="volunteer-opportuinities-section">Freiwilligenarbeit mit Geflüchteten</h3>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="6000">
          <div className='become-a-mentor-img volunteer-opportunity-img'>
            <div className='volunteer-opportunity-text'>
              <h5>Hürden gemeinsam überwinden!</h5>
              <p>Im Projekt Hürdenspringer in Tempelhof-Schöneberg lernst Du neue Menschen kennen und unterstützt sie dabei, in Berlin Fuß zu fassen, ihr Hobby auszuüben oder sich einzubringen.</p>
              <a href="google.com" className="btn btn-light learn-more">Learn more</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="6000">
          <div className='child-care-img volunteer-opportunity-img'>
            <div className='volunteer-opportunity-text'>
              <h5>Kinderbetreuung</h5>
              <p>In verschiedenen Unterkünften für Geflüchtete gibt es Freizeitangebote für Kinder. Für diese suchen wir Freiwillige, die bereits Erfahrungen in der Arbeit mit Kinder- und Jugendlichen haben.</p>
              <a href="google.com" className="btn btn-light learn-more">Learn more</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="6000">
          <div className='sport-programmes-img volunteer-opportunity-img'>
            <div className='volunteer-opportunity-text'>
              <h5>Sportangebote</h5>
              <p>Für Gemeinschaftsunterkünfte suchen wir Freiwillige, die uns dabei helfen Sportangebote für Kinder und Jugendliche zu organisieren!</p>
              <a href="google.com" className="btn btn-light learn-more">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default VolunteerOpportunity;
