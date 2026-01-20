import {Header} from '../Header/Header.jsx';
import './FilteredBooks.css';
import {BookCard} from '../BookCard/BookCard.jsx';

export function FilteredBooks({Search,setSearch,books,booksfav,setbooksfav}){
    const FilteredBooksSearch=books.filter(b=>b.title.toLowerCase().includes(Search.toLowerCase()));
    return(
        <div className="MainFilteredBooksPage">
            <Header Search={Search} setSearch={setSearch}/>
            <div className="FilteredBooksPage">
                <div className="FilteredPage-Books">
                    {FilteredBooksSearch.map((c)=>{
                        return(
                            <BookCard key={c.id} s={c} booksfav={booksfav} setbooksfav={setbooksfav}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}