import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import { Link, NavLink } from "react-router-dom";

//  type Props = {}


const LandingPage = () => {
  return (
    <main className='landigPage_container'>
        <div>
            <img src={logo_star_transparent} alt="Star Book logo"  />
            <h1>STAR BOOK</h1>
        </div>
        <NavLink to="/home"key ="home">
						<button className='startButton'>Let's start</button>
				</NavLink>        
        <Link to="/login"key ="login">
						<button>Login</button>
				</Link>   
        <Link to="/signup"key ="signup">
						<button>Sign Up</button>
				</Link> 
    </main>
  )
}

export default LandingPage


