import React from 'react';
import Meals from './Meals';
import ShoppingList from './ShoppingList';

export default class Dashboard {

  render() {
    return (
      <section>
        <Meals />
        <ShoppingList />
      </section>
    );
  }
}
