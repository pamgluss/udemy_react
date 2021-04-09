import React, { useState, useEffect, useRef } from 'react';

import useHttp from '../../hooks/http'

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal'
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('')
  const inputRef = useRef()

  const { isLoading, error, data, sendRequest, clearError } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(enteredFilter === inputRef.current.value){
        const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          `https://udemy-react-hooks-d2b20-default-rtdb.firebaseio.com/ingredients.json${query}`,
          'GET'
        )
      }
    }, 500);

    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, inputRef, sendRequest])

  useEffect(() => {
    if(!isLoading && !error && data){
      const loadedIngredients = [];
      for(const key in data){
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        })
      }
      onLoadIngredients(loadedIngredients)
    }
  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input 
            type="text" 
            value={enteredFilter}
            ref={inputRef}
            onChange={event => setEnteredFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
