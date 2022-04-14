import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Food = ({meal}) => {
    // console.log('meal', meal)
  return (
    <article className='food-dish'>
        <div className='food-container bg-[#1c2431] flex flex-col mx-auto max-w-[10rem] items-center justify-center my-4 rounded-t-3xl rounded-bl-3xl py-4 px-2 overflow-hidden'>
            <div className='image-div mb-2'>
                <img src={meal.image} alt={meal.name} className='meal-image w-[8rem] rounded-[30%]'/>
            </div>
            <div>
                <h1 className='meal-title w-[8rem] h-[3rem] overflow-hidden'>
                    {meal.name}
                </h1>
                <p className='meal-price'>
                    $55
                </p>
                <div className='meal-info grid grid-cols-2 w-[8rem] overflow-x-hidden items-center'>
                    <p className='rating text-[11px]'>
                        {meal.category}
                    </p>
                    <Link to={`/singlemeal/${meal.id}`}>
                        <Button content='Details' custom='text-[12px] bg-[#ff6801] hover:bg-orange-400 px-1 mx-[15px]'/>
                    </Link>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Food