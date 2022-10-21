import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import LatestTools from './LatestTools/LatestTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestTools></LatestTools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;