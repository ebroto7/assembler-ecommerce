import { useSearchParams } from 'react-router-dom'
import { apiContext } from '../../context/APIContext'

import { FaSearch } from "react-icons/fa"


export const SearchBar = () => {
  const { apiBooks } = apiContext()

  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get("q") ?? ""

  const handleSearch = (event) => {
    setSearchParams({ q: event.target.value })
  }

  return (
    <section>

      <div className='SearchBar_container'>
        <input type="text"
          name="SearchBar"
          placeholder='search'
          onChange={handleSearch}
          value={search}
        />
        <p><FaSearch /></p>
      </div>
      <div>
        <p>hello</p>
      </div>
    </section>
  )
}

export default SearchBar