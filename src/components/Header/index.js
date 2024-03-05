// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header_container">
    <Link to="/">
      <p className="header_para">Home</p>
    </Link>
    <Link to="/about">
      <p className="header_para">About</p>
    </Link>
  </div>
)
export default Header
