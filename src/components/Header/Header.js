import './Header.css';

function Header () {
    return (
        <div className="navbar">
            <h2 className='navbar-header'>THE BEAN MACHINE</h2>
            <div>
                <a href='' className='navbar-link'>About</a>
                <a href='' className='navbar-link'>Selection</a>
                <button className='navbar-button'>Login</button>
            </div>
        </div>
    )
}

export default Header;