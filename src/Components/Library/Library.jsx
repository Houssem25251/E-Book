import './Library.css';
import { BookCard } from '../BookCard/BookCard.jsx';

function SavedBooks({setbooksfav,books,booksfav}){
    return(
        <div id="Library" className="SavedBooks-Container">
            <p className="SavedBooks-Text">Saved Books</p>
            <div className="Books-Container">
                {books.map((c)=>{
                    return(
                        <>
                            <BookCard key={c.id} setbooksfav={setbooksfav} booksfav={booksfav} s={c}/>
                        </>
                    )
                })}
            </div>    
        </div>    
    )
}

export function Library({setbooksfav,books,booksfav}){
    return(
        <>
            <p className="Library-Text">My Library</p>
            <SavedBooks booksfav={booksfav} setbooksfav={setbooksfav} books={books} />
        </>
    )
}