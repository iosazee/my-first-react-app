import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <p className='footer-para'>Find us on social media</p>
            <div className='footer-socialmedia-links'>
                <a href=''> <img title='github-icon' src='images/github.png' alt='github-icon' className='github-icon'/> </a>
                <a href=''> <img title='twitter-icon' src='images/twitter logo.png' alt='twitter-icon' className='twitter-icon'/> </a>
                <a href=''> <img title='facebook-icon' src='images/fb_logo.png' alt='facebook-icon' className='facebook-icon'/> </a>
            </div>
        </div>
    )
}

export default Footer;