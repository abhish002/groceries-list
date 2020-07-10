import React, { useState, useEffect } from 'react';
import './groceries-list.styles.scss';
import data from './groceries.json';

import GroceryItem from '../grocery-item/grocery-item.component';

const GroceriesList = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    setGroceries(data.groceries)
    return () => {

    }
  }, []);

  return (
    <div className='groceries-list'>
      <h1>List of Groceries</h1>
      {
        groceries.map(groceryItem => (
          <GroceryItem key={groceryItem.item} groceryItem={groceryItem} />
        ))
      }
    </div>
  )
}

export default GroceriesList;