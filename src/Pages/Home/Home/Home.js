import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotSummaryCard from '../../Shared/SpotSummaryCard/SpotSummaryCard';

const Home = () => {
    const spots = useLoaderData();

    return (
        <div>
            <h2>Number of spots: {spots.length}</h2>
            {
                spots.map(spots => <SpotSummaryCard
                    key={spots._id}
                    spots={spots}
                ></SpotSummaryCard>)
            }
        </div>
    );
};

export default Home;