import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {

  return (
    <nav className="nav-header">
      <div className="nav-content">
  

        <div className="nav-bar-large-container">
          <Link to="/" className="noveltiLogo">
            <p  className="website-logo"> Novelti</p>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/listOfData" className="nav-link">
                ListOfUsers
              </Link>
            </li>


          </ul>
  
        </div>
      </div>
      
    </nav>
  )
}

export default Header