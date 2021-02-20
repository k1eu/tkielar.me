import './Navbar.scss'
const Navbar = () => {
    return(
      <nav className="navigation-wrapper">
          <ul className="list-wrapper">
            <li className="list-item">Home</li>
              <li className="list-item">Portfolio</li>
              <li className="list-item">About Me</li>
              <li className="list-item">Blog</li>
          </ul>
      </nav>
    );
}

export default Navbar;