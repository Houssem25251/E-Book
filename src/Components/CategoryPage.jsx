import {Header} from './Header.jsx';
import './CategoryPage.css';
import {useState} from 'react';
import FILLEDSTAR from '../assets/FILLEDSTAR.png'
import UNFILLEDSTAR from '../assets/UNFILLEDSTAR.png'
import { Link, useParams } from 'react-router';

function BookCardCategory({s,booksfav,setbooksfav}){
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
    return(
        <div className="BookCard">
            <Link className="Link-To-Book" to={`/book/${s.id}`}>
                <img className="BookCard-Image" src={s.image}/>
            </Link>
            <button onClick={()=>{addfav()}} onMouseLeave={()=>{mouseOut()}} onMouseEnter={()=>{mouseEnter()}} className="BookCard-Button">
                        <img title="Add to favorite" className="BookCardFavorite" src={fs?FILLEDSTAR:UNFILLEDSTAR}/>
            </button>
        </div>
    )
}


export function CategoryPage({CategoriesArray,books,booksfav,setbooksfav}){
    let {id}=useParams();
    const cat=CategoriesArray.find(k=>k.id===Number(id));
    const CatBooks=books.filter(e=>e.genre===cat.title);
    
    return(
        <div className="MainCategoryPage">
            <Header />
            <div className="CategoryPage">
                <div className="CategoryPage-Books">
                    {CatBooks.map((c)=>{
                        return(
                            <BookCardCategory key={c.id} s={c} booksfav={booksfav} setbooksfav={setbooksfav}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}