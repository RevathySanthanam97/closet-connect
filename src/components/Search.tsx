import SearchIcon from '../assets/search.svg'
import "./Search.scss"
import { SearchProps } from '../types';

const Search = ({ query, setQuery } : SearchProps) => {
  return (
    <div className='search__input'>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Find the items you're looking for"
      />
      <img src={SearchIcon} />
    </div>
  )
}

export default Search