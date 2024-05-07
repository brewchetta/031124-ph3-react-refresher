import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <nav>

            <NavLink 
            className={({ isActive }) =>
            isActive ? "active" : ""
          }
            to='/'>Home</NavLink>

            <NavLink 
            className={({ isActive }) =>
            isActive ? "active" : ""
          }
            to='/about'>About</NavLink>

            <NavLink 
            className={({ isActive }) =>
            isActive ? "active" : ""
          }
            to='/contact'>Contact</NavLink>

            <NavLink 
            className={({ isActive }) =>
            isActive ? "active" : ""
          }
            to='/videos'>Videos</NavLink>

        </nav>
    )

}

export default Navbar