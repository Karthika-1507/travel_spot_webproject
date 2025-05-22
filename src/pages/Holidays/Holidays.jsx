import React from 'react';
import './Holidays.css';
import SecondHeroSection from '../../components/SecondHeroSec/SecondHeroSec';
import EveryoneHolidays from '../../components/EveryoneHolidays/EveryoneHolidays';
import NeedInspirationSection from '../../components/NeedInspiration/NeedInspiration';
import NextHoliday from '../../components/NextHoliday/Nextholiday';
import HolidayPlanSection from '../../components/HolidayPlanSec/HolidayPlanSec';
import RecommendedSection from '../../components/RecommendedSection/RecommendedSection';

function Holidays() {
    return (
        <div className='holidays-page'>
            <SecondHeroSection secondHeroTitle='Your perfect holiday' />
            <EveryoneHolidays />
            <NeedInspirationSection />
            <NextHoliday />
             <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holidays' />
              <div className='mt-4 mt-sm-5'>
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div>
           
        </div>
    )
}

export default Holidays;