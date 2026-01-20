import './Header.css';
import {useLocation,useNavigate} from 'react-router';
import {scroller} from 'react-scroll';

export function Header({Search,setSearch}){
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
                <div className="Header-Part" onClick={() =>Click("About")}>About</div>
                <input type="text" placeholder="Search books,authors" className="Header-Search" value={Search} onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={(e) => {if (e.key === "Enter") n("/filteredbooks");}} />
        </div>
    )
    
    
}