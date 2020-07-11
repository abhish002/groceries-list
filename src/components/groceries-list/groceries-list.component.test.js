import React from 'react';
import { create } from 'react-test-renderer';
import GroceriesList from './groceries-list.component';

describe('groceries list component', () => {
  it('matches the snapshot', () => {
    const groceriesList = create(<GroceriesList />);
    expect(groceriesList.toJSON()).toMatchSnapshot();
  });
});