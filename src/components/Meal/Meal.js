import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Meal = ({meal, addToCart}) => {
    // console.log(meal)
    const {strMeal, strMealThumb, strInstructions} = meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <p className='meal-title'>{strMeal}</p>
                <p>{strInstructions.slice(0, 250)+'...'}</p>
            </div>
            <button onClick={ () => addToCart(meal)} className='btn-details'><p>Details</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Meal;