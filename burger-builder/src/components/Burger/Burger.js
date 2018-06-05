import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => { // 'cheese', 'meat', ect...
      return [...Array(props.ingredients[igKey])] // make array from the ingredients
      .map((_, i) => { //_ is blank because we already have access to igKey, but we do need the element number
        return <BurgerIngredient 
          key={igKey + i} //meat1, cheese2, ect... arrays of JSX elements require key's
          type={igKey} />
      }); 
    })
    .reduce((prev, curr) => {
      return prev.concat(curr)
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
        {transformedIngredients}
      <BurgerIngredient type='bread-bottom' /> 
    </div>
  );
};

export default burger;