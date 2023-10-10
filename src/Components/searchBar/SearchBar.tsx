import { useEffect } from "react"
import { apiContext } from "../../context/APIContext"

export const SearchBar = () => {

  const { apiBooks } = apiContext()

  useEffect(() => {

  }, [])

  return (
    <>
      <div className='SearchBar_container'>
        <input type="search" name="SearchBar" id="SearchBar" placeholder='search' />
        <p>lupa</p>
      </div>
    </>
  )
}

export default SearchBar