import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchForm from '../../components/SearchForm/SearchForm';
import LastHolidaysSection from '../../components/LastHolidaysSection/LastHolidaysSection';
import RecommendedSection from '../../components/RecommendedSection/RecommendedSection';
import HolidayPlanSection from '../../components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection from '../../components/FavouritesSection/FavouritesSection';
import RecentHolidays from '../../components/RecentHolidays/RecentHolidays';
import NeedInspiration from '../../components/NeedInspiration/NeedInspiration';

function Home() {
    return (
        <div className='home-page'>
            <HeroSection />
            <SearchForm />
            <LastHolidaysSection />
             <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div>
             <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' />
             <FavouritesSection />
             <RecentHolidays />
             <NeedInspiration />
         </div>

    )
}

export default Home; 