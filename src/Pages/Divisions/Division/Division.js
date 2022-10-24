import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotSummaryCard from '../../Shared/SpotSummaryCard/SpotSummaryCard';

const Division = () => {
    const divisionSpots = useLoaderData();
    return (
        <div>
            <h2>Number of spots: {divisionSpots.length}</h2>
            {
                divisionSpots.map(spots =><SpotSummaryCard
                    key={spots._id}
                    spots={spots}
                ></SpotSummaryCard>)
            }
        </div>
    );
};

export default Division;