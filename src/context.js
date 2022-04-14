import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchData, setSearchData] = useState('a')
    const [foods, setFoods] = useState([])
    
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

    const fetchFoods = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${url}${searchData}`)
            const foodData = await res.json()
            // console.log(foodData)
            const { meals } = foodData
            if (meals) {
                const newMeals = meals.map((item) => {
                    const { idMeal, strMealThumb, strMeal, strCategory } = item
                  return  {
                            id:idMeal, 
                            image:strMealThumb, 
                            name:strMeal, 
                            category:strCategory
                        }
                })
                setFoods(newMeals)
            }else {
                setFoods([])
            }
            setLoading(false)

        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchFoods()
    }, [searchData])
    return (
        <AppContext.Provider value={{
            loading, 
            foods, 
            setSearchData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}