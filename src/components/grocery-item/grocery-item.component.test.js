import React from 'react';
import { create } from 'react-test-renderer';
import GroceryItem from './grocery-item.component';

describe('grocery item component', () => {
  const item = {
    brand: "Jabron",
    category: "beverage",
    item: "Milk",
    qty: 1,
    type: "Organic 2% Milk"
  }

  it('matches the snapshot', () => {
    const groceryItem = create(<GroceryItem groceryItem={item} />);
    expect(groceryItem.toJSON()).toMatchSnapshot();
  });
});
