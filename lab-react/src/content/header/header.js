import ironHackLogo from "../images/ironhack-logo-xs.png"
import ironHackMenu from "../images/menu-top-xs.png"
import "./style-header.css"

function Header(){
    return (
        <nav className="bar">
            <img className="logo" src={ironHackLogo} alt="iron-hack-logo"></img>
            <img className= "menu" src={ironHackMenu} alt="iron-hack-menu"></img>
        </nav>
    )
}

export default Header
