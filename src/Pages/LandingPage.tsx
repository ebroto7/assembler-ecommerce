import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import { Link, NavLink } from "react-router-dom";
import { HOME, LOGIN, SIGNUP } from '../Routes/paths';

//  type Props = {}


const LandingPage = () => {
  return (
    <main className='landigPage_container'>
        <div>
            <img src={logo_star_transparent} alt="Star Book logo"  />
            <h1>STAR BOOK</h1>
        </div>
        <NavLink to={HOME} key ="home">
						<button className='startButton'>Let's start</button>
				</NavLink>        
        <Link to={LOGIN} key ="login">
						<button>Login</button>
				</Link>   
        <Link to={SIGNUP} key ="signup">
						<button disabled>Sign Up</button>
				</Link> 
    </main>
  )
}

export default LandingPage


