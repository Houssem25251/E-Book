import './Header.css';
import {Link} from 'react-scroll';
import {Categories} from '../Components/Categories/Categories.jsx';
import {Home} from '../Components/Home/Home.jsx';


export function Header(){
    return(
        <div className="Header">
            <Link to="Home" smooth={true} duration={400} className="Header-Part">Home</Link>
            <Link to="Categories" smooth={true} duration={400} offset={-50} className="Header-Part">Categories</Link>
            <Link className="Header-Part">Library</Link>
            <Link className="Header-Part">Search</Link>
            <Link className="Header-Part">About</Link>
            <input type="text" placeholder="Search books,authors" className="Header-Search"/>
        </div>
    )
}