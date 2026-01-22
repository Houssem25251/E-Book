import {useState} from 'react';
import FILLEDSTAR from '../../assets/FILLEDSTAR.png';
import UNFILLEDSTAR from '../../assets/UNFILLEDSTAR.png';
import FILLEDCHECKMARK from '../../assets/FILLEDCHECKMARK.png';
import UNFILLEDCHECKMARK from '../../assets/UNFILLEDCHECKMARK.png';
import {Link} from 'react-router';
import './BookCard.css';

export function BookCard({s,booksfav,setbooksfav,bookssaved,setbookssaved}){
    const [fs,setFs]=useState(false);
    const[ss,setSs]=useState(false);
    function mouseEnter(set){
        set(true);
    }
    function mouseOut(set){
        set(false);
    }
    function addfav(setA){
        setA(prev=>{
            if(!prev.some((book)=>{return(book.id===s.id)})){
            return [...prev,s];
        }
            else{
                alert("Book already exists in favorite section!");
                return prev;
            }
        })
            
    }
    function removefav(setA){
        setA(prev=>prev.filter((book)=>{return(book.id!==s.id)}));
    }

    return(
        <div className="BookCard">
            <Link className="Link-To-Book" to={`/book/${s.id}`}>
                <img className="BookCard-Image" src={s.image}/>
                <p className="bookcard-title">{s.title}</p>
            </Link>
            {!booksfav.some((book)=>{return(book.id===s.id)}) && <button onClick={()=>{addfav(setbooksfav)}} onMouseLeave={()=>{mouseOut(setFs)}} onMouseEnter={()=>{mouseEnter(setFs)}} className="BookCard-Button-Favorite">
                        <img title="Add to favorites!" className="BookCardFavorite" src={fs?FILLEDSTAR:UNFILLEDSTAR}/>
            </button>}
            {booksfav.some((book)=>{return(book.id===s.id)}) && <button onClick={()=>{removefav(setbooksfav)}} onMouseLeave={()=>{mouseOut(setFs)}} onMouseEnter={()=>{mouseEnter(setFs)}} className="BookCard-Button-Favorite">
                        <img title="Remove from favorites!" className="BookCardFavorite" src={fs?UNFILLEDSTAR:FILLEDSTAR}/>
            </button>}
            {bookssaved.some(b=>b.id===s.id) && <button onClick={()=>{removefav(setbookssaved)}} onMouseLeave={()=>{mouseOut(setSs)}} onMouseEnter={()=>{mouseEnter(setSs)}} className="BookCard-Button-Saved">
                        <img title="Remove from savedbooks!" className="BookCardFavorite" src={ss?UNFILLEDCHECKMARK:FILLEDCHECKMARK}/>
            </button>}
            {!bookssaved.some(b=>b.id===s.id) && <button onClick={()=>{addfav(setbookssaved)}} onMouseLeave={()=>{mouseOut(setSs)}} onMouseEnter={()=>{mouseEnter(setSs)}} className="BookCard-Button-Saved">
                        <img title="Add to savedbooks!" className="BookCardFavorite" src={ss?FILLEDCHECKMARK:UNFILLEDCHECKMARK}/>
            </button>}
            
        </div>
    )
}