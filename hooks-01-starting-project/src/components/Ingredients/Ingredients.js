import React, { useMemo, useReducer, useCallback, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal'

import useHttp from '../../hooks/http'

const ingredientReducer = (currentIngredients, action) => {
  switch(action.type){
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient]
    case 'DELETE':
      return currentIngredients.filter(ingredient => ingredient.id !== action.id)
    default:
      throw new Error('Invalid action type')
  }
}

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, [])
  const {isLoading, error, data, sendRequest, clearError, requestExtra, identifier} = useHttp();

  useEffect(() => {
    if(isLoading || error){
      return
    } else if (identifier === 'DELETE_INGREDIENT'){
      dispatch({ type: 'DELETE', id: requestExtra})
    } else if(identifier === 'ADD_INGREDIENT'){
      dispatch({ 
        type: 'ADD',
        ingredient: {
          id: data.name,
          ...requestExtra
        }
      })
    }
  }, [data, requestExtra, isLoading, error]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback((newIngredient) => {
    sendRequest(
      'https://udemy-react-hooks-d2b20-default-rtdb.firebaseio.com/ingredients.json', 
      'POST',
      JSON.stringify(newIngredient),
      newIngredient,
      'ADD_INGREDIENT'
    )
  }, [sendRequest]);

  const removeIngredientHandler = useCallback((id) => {
    sendRequest(
      `https://udemy-react-hooks-d2b20-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      'DELETE',
      null,
      id,
      'DELETE_INGREDIENT'
    )
  }, [sendRequest]);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
