import './Special.css'


export default function SpecialOffersCard (props) {
    return (
        <div className='special-offers-card'>
            <img title='coffee-bean' src='images/coffee_beans.png' alt={props.offerName} className='coffee-bean costa-rica'/>
            <p className='special-para'>{props.offerName}</p>
            <button className='special-button'>Buy</button>
        </div>
    )
}

