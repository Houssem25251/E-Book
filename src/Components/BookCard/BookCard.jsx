import {useState} from 'react';
import FILLEDSTAR from '../../assets/FILLEDSTAR.png';
import {Link} from 'react-router';
import UNFILLEDSTAR from '../../assets/UNFILLEDSTAR.png';
import './BookCard.css';

export function BookCard({s,booksfav,setbooksfav}){
    const [fs,setFs]=useState(false);
    function mouseEnter(){
        setFs(true);
    }
    function mouseOut(){
        setFs(false);
    }
    function addfav(){
        if(!booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav([...booksfav,s]);
        }
        else{
            alert("Book already exists in favorite section!");
        }
    }
    function removefav(){
        if(booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav(booksfav.filter((book)=>{return(book.id!==s.id)}));
        }
    }
    return(
        <div className="BookCard">
            <Link className="Link-To-Book" to={`/book/${s.id}`}>
                <img className="BookCard-Image" src={s.image}/>
            </Link>
            {!booksfav.some((book)=>{return(book.id===s.id)}) && <button onClick={()=>{addfav()}} onMouseLeave={()=>{mouseOut()}} onMouseEnter={()=>{mouseEnter()}} className="BookCard-Button">
                        <img title="Add to favorites" className="BookCardFavorite" src={fs?FILLEDSTAR:UNFILLEDSTAR}/>
            </button>}
            {booksfav.some((book)=>{return(book.id===s.id)}) && <button onClick={()=>{removefav()}} onMouseLeave={()=>{mouseOut()}} onMouseEnter={()=>{mouseEnter()}} className="BookCard-Button">
                        <img title="Remove from favorites" className="BookCardFavorite" src={fs?UNFILLEDSTAR:FILLEDSTAR}/>
            </button>}
        </div>
    )
}