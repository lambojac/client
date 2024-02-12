import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                        <li className='nav-link'><Link to="/">META</Link></li> 
                        <li className='nav-link'><Link to="/shop">Meta Quest</Link> </li>
                        <li className='nav-link'><Link to="/category/men">Ray-ban|Meta</Link></li> 
                        <li className='nav-link'><Link to="/category/women">Apps nd games</Link></li> 
                        
                    </ul>
                    <ul className='nav'>
                        <li>About meta</li>
                        <li>Support</li>
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;