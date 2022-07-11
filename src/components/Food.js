import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Food = ({meal}) => {
    // console.log('meal', meal)
    
  return (
    <article className='food'>
        <div className='food-container bg-[#1c2431] flex flex-col mx-auto max-w-[9rem] sm:max-w-[9rem] items-center justify-center my-4 md:py-0 md:px-0 rounded-t-3xl rounded-bl-3xl py-3 px-2 overflow-hidden md:max-w-[20rem] lg:max-w-[21rem] xl:max-w-[22rem] md:h-[22rem] md:rounded-2xl'>
            <div className='image-div mb-2 overflow-hidden md:w-[24rem] md:h-auto'>
                <img src={meal.image} alt={meal.name} className='meal-image w-[8rem] rounded-3xl md:w-full md:h-full md:rounded-none md:object-cover md:transform transition duration-300 md:hover:scale-110'/>
            </div>
            <div className='bottom-div md:flex flex-col md:w-full md:px-4 md:pb-2'>
                <h1 className='meal-title w-[8rem] h-[3rem] overflow-hidden md:text-center md:w-auto md:text-xl'>
                    {meal.name}
                </h1>
                <p className='meal-price md:text-center md:text-lg'>
                    $55
                </p>
                <div className='meal-info grid grid-cols-2 w-[8rem] overflow-x-hidden items-center md:flex md:justify-between md:w-full'>
                    <p className='rating text-[11px] md:text-base'>
                        {meal.category}
                    </p>
                    <Link to={`/singlemeal/${meal.id}`}>
                        <Button content='Details' custom='text-[12px] bg-[#ff6801] hover:bg-orange-400 px-1 mx-[15px] md:m-0 md:text-lg md:px-2'/>
                    </Link>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Food