import React from 'react';
import './App.css';
import './components/error-boundary/error-boundary.component';
import GroceriesList from '../src/components/groceries-list/groceries-list.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Grocery List</h1>
      </header>
      <main>
        <ErrorBoundary>
          <GroceriesList />
        </ErrorBoundary>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
