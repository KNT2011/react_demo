import {AiOutlineSearch} from "react-icons/ai";

function Search() {
    return (
        <div className='search-container'>
            <input type="text" placeholder='Search...'/>
            <AiOutlineSearch size={20} className='icon_search' />
        </div>
    )
}

export default Search
