import React from 'react'
import FoodList from '../components/FoodList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main className='mt-10'>
        <SearchForm/>
        <FoodList/>
    </main>
  )
}

export default Home