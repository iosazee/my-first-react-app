import './Special.css'

function Special () {
    return (
        <div className='special-container'>
                <h3 className='special-offers-header'>Special Offers</h3>
            <div className='special-offers-container'>
                <div className='special-offers-card'>
                    <img title='coffee-bean' src='images/coffee_beans.png' alt='Costa Rica Single Origin' className='coffee-bean costa-rica'/>
                    <p className='special-para'>Costa Rica Single Origin</p>
                    <button className='special-button'>Buy</button>
                </div>
                 <div className='special-offers-card'>
                    <img title='coffee-bean' src='images/coffee_beans.png' alt='Brazillian Medium Roast' className='coffee-bean brazillian'/>
                    <p className='special-para'>Brazillian Medium Roast</p>
                    <button className='special-button'>Buy</button>
                </div>
                <div className='special-offers-card'>
                    <img title='coffee-bean' src='images/coffee_beans.png' alt='Colombian Single Origin' className='coffee-bean colombian'/>
                    <p className='special-para'>Colombian Single Origin</p>
                    <button className='special-button'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Special;