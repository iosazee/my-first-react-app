import './Banner.css'

function Banner () {
    return (
        <div className="banner-container">
            <h1 className='banner-header1'>The Bean <br></br>Machine</h1>
            <h3 className='banner-header2'>Coffee Bean Shop</h3>
            <div className="input-image-container">
                <input placeholder="Search for a coffee bean" className="search-bar"></input>
                <img title="arrow" src="images/arrow_right.png" alt="arrow" className="arrow"/>
                <img title="illustration" src='images/illustration.png' alt="illus" className="illustration"/>
            </div>
            
        </div>
    )
}

export default Banner;