import { BookCardFavorite } from '../BookPage.jsx';
import './Favorites.css';



export function Favorites({setbooksfav,booksfav}){
    return(
        <div id="Favorites" className="Favorites-Container">
                    <p className="Favorites-Text">Favorites</p>
                    <div className="FavoritesBook-Container">
                        {booksfav.map((c)=>{
                            return(
                                <>
                                    <BookCardFavorite key={c.id} setbooksfav={setbooksfav} booksfav={booksfav} s={c}/>
                                </>    
                            )
                        })}
                    </div>    
        </div>
    )    
}