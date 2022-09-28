import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Meal from '../components/Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

        const addToCart = (meal) =>{
        // console.log(meal);
        //const newCart = [...cart, meal];
        //console.log(meals)
        //setCart(newCart);
        setCart(meal);
    }

    return (
        <div className='meals-container'>
            <div className='meals'>
                {
                    meals.map(meal => <Meal
                    meal = {meal}
                    key={meal.idMeal}
                    addToCart = {addToCart}
                    ></Meal>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;