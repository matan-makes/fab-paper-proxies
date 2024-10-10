import { Card } from '@flesh-and-blood/types';
import React from 'react';
import CardItem from './CardItem';
import { WithClassName } from '../types';

interface SearchResultsProps extends WithClassName {
  results: Card[];
}

const SearchResults = ({ results, className }: SearchResultsProps) => {
  return (
    <div
      className={`${className} grid grid-cols-3 gap-3 overflow-y-scroll rounded-xl bg-inherit`}
    >
      {results.map((card: Card) => {
        return (
          <CardItem
            key={card.cardIdentifier}
            card={card}
            className="col-span-1 row-span-1"
          ></CardItem>
        );
      })}
    </div>
  );
};

export default SearchResults;
