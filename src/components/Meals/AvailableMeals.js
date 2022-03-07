import React, { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// const MEALS_LIST = [
//   {
//     id: 'meal_1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'meal_2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'meal_3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'meal_4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];



const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(()=>{
      const fetchMeals = async () => {
        const response = await fetch('https://foodorderapp-29813-default-rtdb.firebaseio.com/meals.json')
        
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        
        const responseData = await response.json();

        const loadMeals = [];

        for(const key in responseData){
          loadMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          })
        }

        setMeals(loadMeals);
        setIsLoading(false);
      }

      fetchMeals().catch((error)=>{
        setIsLoading(false);
        setHttpError(error.message);
      })

    }, []);

    if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

    //const mealsList = MEALS_LIST.map((meal) => (
    const mealsList = meals.map((meal) => (
      <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price} 
      /> 
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;
