import { Outlet, Link } from "react-router-dom"
//import { ReactComponent as HmeLgo } from "../../assets/hmeLg.svg"

function Navigation () {
    return(
      <div>
      <div className='navigation'>
      <Link className='logo-container' to='/home'>
      <h1>Home</h1>      
      </Link>
      <div className='nav-links-container'>
      <Link className='nav-link' to='/about'>
        About
      </Link>
      <div className='nav-links-container'>
      <Link className='nav-link' to='/contact'>
      Contact Me
      </Link>
      </div>
      </div>
      </div>
      <Outlet />
      </div>
    )
  }

  export default Navigation