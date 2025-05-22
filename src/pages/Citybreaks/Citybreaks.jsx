import React from 'react';
import './Citybreaks.css';
import SecondHeroSection from '../../components/SecondHeroSec/SecondHeroSec';
import AmsterdamCityBreaksSection from '../../components/CityBreaksSection/AmsterdamCityBreak';
import HolidayPlanSection from '../../components/HolidayPlanSection/HolidayPlanSection';
import LondonCityBreaksSection from '../../components/CityBreaksSection/LondoncitySec';
import RecommendedSection from '../../components/RecommendedSection/RecommendedSection';
import ParisCityBreaksSection from '../../components/CityBreaksSection/ParisCityBreakSec';
import NeedInspirationSection from '../../components/NeedInspiration/NeedInspiration';

function CityBreaks() {
  return (
    <div className='city-breaks-page'>
      <SecondHeroSection secondHeroTitle='City break for you' />
      <AmsterdamCityBreaksSection />
       <HolidayPlanSection itemHolidayPlanTitle='Find your perfect summer holiday' />
       <LondonCityBreaksSection />
       <div className='my-4 my-sm-5'>
        <RecommendedSection itemRecommendedTitle='Your dream holiday' />
      </div>
       <ParisCityBreaksSection />
     <NeedInspirationSection />
      </div>
  )
}

export default CityBreaks;