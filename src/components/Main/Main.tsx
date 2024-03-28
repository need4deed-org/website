import './Main.css';  
import { useTranslation } from 'react-i18next';

function Main() {

  const {t} = useTranslation();

  return (
    <>
    <div className='main-container'>
      <div className='main-text-container'>
      <h1 className='heading'>NEED 4 DEED</h1>
      <h5 className='slogan'>{t('projectIntro.slogan')}</h5>
      </div>
      <button className="volunteer-cta">
        {t('projectIntro.beVolunteerButton')}
      </button>
    </div>
    </>
  );
}

export default Main;
