import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header_container">
    <Link to="/" className="linkEl">
      <p className="header_para">Home</p>
    </Link>
    <Link to="/about" className="linkEl">
      <p className="header_para">About</p>
    </Link>
  </div>
)
export default Header
