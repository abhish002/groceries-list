import React from 'react';
import './grocery-item.scss';

const GroceryItem = ({ groceryItem: { category, item, type, qty } }) => {
  return (
    <div className='grocery-item'>
      <div className='grocery-item__qty'>{`QTY: ${qty}`}</div>
      <div className='grocery-item__item-container'>
        <div className='grocery-item__item-container__item'>{item}</div>
        <div className='grocery-item__item-container__type'>{type}</div>
      </div>
      <div className='grocery-item__category'>{category}</div>
    </div>
  )
}

export default GroceryItem;
