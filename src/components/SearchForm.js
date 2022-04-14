import React, { useRef } from 'react'
import { useGlobalContext } from '../context'
import { FiSearch } from 'react-icons/fi';
import Button from './Button';


const SearchForm = () => {
    const {setSearchData} = useGlobalContext()
    const searchValue = useRef('')

    const handleSearchFoods = () => {
        setSearchData(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <section className='form-section flex justify-center w-auto'>
        <form onSubmit={handleSubmit} className='search-form'>
            <div className='search-wrapper flex items-center bg-[#1c2431] rounded-xl py-1 px-1 w-[21rem] justify-between'>
                <input type='text'
                ref={searchValue}
                onChange={handleSearchFoods} placeholder='Search Meals' className='rounded-md py-1 bg-transparent border-none w-full'/>
                <Button buttonType='button'
                content={<FiSearch/>} custom='mx-0 bg-[#ff6801] rounded-xl py-1'/>
            </div>
        </form>
    </section>
  )
}

export default SearchForm