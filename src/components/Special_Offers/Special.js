import React from 'react';
import './Special.css'
import SpecialOffersCard from './SpecialOffersCard';

function Special () {
    const [specialOffers, setSpecialOffers] = React.useState([
        {
            offerName: "Costa Rica Single Origin"
        },
        {
            offerName: "Brazillian Medium Roast"
        },
        {
            offerName: "Colombian Single Origin"
        }

    ])
    return (
        <div className='special-container'>
                <h3 className='special-offers-header'>Special Offers</h3>
            <div className='special-offers-container'>
                {
                    specialOffers.map((offer)=> <SpecialOffersCard offerName={offer.offerName}/>)
                }
            </div>
        </div>
    )
}

export default Special;