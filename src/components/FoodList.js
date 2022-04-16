import React from 'react'
import { useGlobalContext } from '../context'
import Food from './Food'
import Loading from './Loading'

const FoodList = () => {
    const {foods, loading} = useGlobalContext()
    // console.log("ff",foods)

    if (loading) {
        return <Loading/>
    }
    if (foods.length < 1) {
        return (
        <h1 className='search-response text-center py-2 italic'>
            No meal match your search criteria
        </h1>
        )
    }


  return (
    <section className='foodlist-section my-[1rem] md:px-12'>
        <h2 className='foods-menu-title text-center'>
            ITADAKIMASU😋
        </h2>
        <div className='food-list grid grid-cols-2 md:flex flex-wrap justify-between'>
            {
                foods.map((meal) => {
                    return <Food key={meal.id} meal={meal} />
                })
            }
        </div>
    </section>
  )
}

export default FoodList