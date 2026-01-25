import './Header.css';
import {Link} from 'react-scroll';
import {Categories} from '../Components/Categories/Categories.jsx';
import {Home} from '../Components/Home/Home.jsx';
import {useLocation,useNavigate} from 'react-router';
import {scroller} from 'react-scroll';

export function Header(){
    const l=useLocation();
    const n=useNavigate();
    function Click(PagePart){
        if(l.pathname==="/"){
            scroller.scrollTo(PagePart,{
                smooth: true,
                duration: 400,
                offset: -50
            })

        }
        else{
            n("/",{state: PagePart});
            scroller.scrollTo(PagePart,{
                smooth: true,
                duration: 400,
                offset: -50
            });

        }
    }
    return(
        <div className="Header">
                <div className="Header-Part" onClick={() => Click("Home")}>Home</div>
                <div className="Header-Part" onClick={() =>Click("Categories")}>Categories</div>
                <div className="Header-Part" onClick={() =>Click("Library")}>Library</div>
                <div className="Header-Part" onClick={() =>Click("Favorites")}>Favorites</div>
                <div className="Header-Part">About</div>
                <input type="text" placeholder="Search books,authors" className="Header-Search"/>
        </div>
    )
    
    
}