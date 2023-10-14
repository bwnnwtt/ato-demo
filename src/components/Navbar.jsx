import logo from "../assets/ato_logo.webp"
import HamburgerIcon from "../assets/HamburgerMenu"

const Navbar = () => {

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="ato-logo"></img>
      <ul>
        <li><a href="https://#">Already a member?</a></li>
        <li><a href="https://#">Login</a></li>
        <li><a href="https://#">Sign up</a></li>
        <HamburgerIcon />
      </ul>
    </div>
  )
}

export default Navbar