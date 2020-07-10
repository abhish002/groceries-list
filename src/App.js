import React from 'react';
import './App.css';

import GroceriesList from '../src/components/groceries-list/groceries-list.component';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Grocery List</h1>
      </header>
      <main>
        <GroceriesList />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
