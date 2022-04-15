import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { BsHeart, BsHeartFill } from 'react-icons/bs';


const SingleMeal = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [foods, setFoods] = useState({
    // name: '',
    // image: '',
    // category: '',
    // ingredient1: ''
    })
    const [wish, setWish] = useState(false)

    const handleWish = () => {
        setWish((prevWish) => !prevWish)
    }

    const mealDetails = async () => {
        try {
            const res = await fetch(`${url}${id}`)
            const foodDetails = await res.json()
            console.log("rrr",foodDetails)
            if (foodDetails.meals) {
                setFoods({
                    ...foods, 
                    name: foodDetails.meals[0].strMeal,
                    image: foodDetails.meals[0].strMealThumb,
                    country: foodDetails.meals[0].strArea,
                    category: foodDetails.meals[0].strCategory, 
                    ingredient1: foodDetails.meals[0].strIngredient1, 
                    ingredient2: foodDetails.meals[0].strIngredient2,
                    ingredient3: foodDetails.meals[0].strIngredient3,
                    ingredient4: foodDetails.meals[0].strIngredient4,
                    ingredient5: foodDetails.meals[0].strIngredient5

                })
            }else {
                setFoods(null)
                // console.log('null')
            }
            setLoading(false)
        }catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    // console.log(foods.country)
    
    useEffect(()=> {
        setLoading(true)
       mealDetails()
    }, [id])
    
    if (loading) {
       return <Loading/>
    }
    if (!foods) {
        return( <p>
            Apologies... Meal not found. Kindly check out our list of foods 
            <Link to='/'>
                <Button content='here'/>
            </Link>
            </p>
        )
    }
    const {name, image,category, country, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5 } = foods
    
    
    console.log('foods',foods)
  return (
    <section className='singlemeal-section mb-4 flex flex-col md:flex-row justify-center md:my-[5rem] 2xl:gap-[5rem]md:px-12'>
        <div className='image-container'>
            <img src={image} alt={name} className='rounded-b-xl w-full h-[20rem] object-cover md:rounded-lg' />
        </div>
        <div className='meal-details-container px-4 flex flex-col gap-3'>
            <div className='row1 flex items-center justify-between md:flex-col md:items-start'>
                <h1 className='meal-title text-[2.5rem] font-semibold'>
                    {name}
                </h1>
                <p className='meal-price text-lg font-bold'>
                    $55.99
                </p>
            </div>
            <div className='row2'>
                <p className='meal-desc text-base text-gray-300 flex items-center'>
                The Food Science Text Series provides facul with the leading teaching tool The Editorial Board hos outlined.
                <span onClick={handleWish} className='wish-icons cursor-pointer'>
                   {wish ? <BsHeartFill className='wish-icon text-xl text-[#ff6801]'/>
                    :
                    <BsHeart className='wish-icon text-xl text-[#ff6801]'/>
                    }
                </span>
                </p>
            </div>
            <div className='row3 flex justify-between'>
               <div className='meal-category flex items-center gap-4'>
                    <p>Category:</p> 
                    <p className='bg-[#1c2431] py-1 px-2 rounded'>{category}</p>
               </div>
               <div className='meal-category flex items-center gap-4'>
                    <p>Country:</p> 
                    <p className='bg-[#1c2431] py-1 px-2 rounded'>{country}</p>
               </div>
            </div>
            <div className='row-4 flex gap-4'>
                <p>Ingredients:</p>
                <ul className='ingredients-list flex flex-wrap items-start gap-x-3 list-disc list-inside'>
                    <li>{ingredient1}</li>
                    <li>{ingredient2}</li>
                    <li>{ingredient3}</li>
                    <li>{ingredient4}</li>
                    <li>{ingredient5}</li>
                </ul>
            </div>
            <div className='cart-row flex justify-between md:justify-start md:gap-6'>
                <div className='cart-number-box bg-[#1c2431] px-4 py-2 rounded-lg'>
                    hhh
                </div>
                <div className='add-to-cart-button'>
                    <Button custom='bg-[#ff6801]' content='ADD TO CART'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleMeal