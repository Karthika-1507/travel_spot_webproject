import React from 'react';
import './Destinations.css';
import SecondHeroSection from '../../components/SecondHeroSec/SecondHeroSec';
import EuropeDestinationSection from '../../components/DestinationSection/EuropeDestSec';
import HolidayPlanSection from '../../components/HolidayPlanSection/HolidayPlanSection';
import AsiaDestinationSection from '../../components/DestinationSection/AsiaDestSec';
import NeedInspirationsSection from '../../components/NeedInspiration/NeedInspiration';
import AfricaDestinationSection from '../../components/DestinationSection/AfricaDestSec';
import RecommendedSection from '../../components/RecommendedSection/RecommendedSection';

function Destinations() {
  return (
    <div className='destinations-page'>
      <SecondHeroSection secondHeroTitle='Beautiful destinations' />
      <EuropeDestinationSection />
      <HolidayPlanSection itemHolidayPlanTitle='Find your perfect summer holiday' />
      <AsiaDestinationSection />
      <NeedInspirationsSection />
      <AfricaDestinationSection />
      <div className='mt-4 mt-sm-5'>
        <RecommendedSection itemRecommendedTitle='Your dream holiday' />
      </div>
    </div>
  )
}

export default Destinations;