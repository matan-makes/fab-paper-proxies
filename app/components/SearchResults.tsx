import { Card } from "@flesh-and-blood/types";
import React from "react";
import CardItem from "./CardItem";
import { WithClassName } from "../types";

interface SearchResultsProps extends WithClassName {
  results: Card[];
}

const SearchResults = ({ results, className }: SearchResultsProps) => {
  return (
    <div
      className={`${className} bg-slate-100 dark:bg-slate-800 p-4 rounded-md grid grid-cols-4 overflow-y-scroll gap-3`}
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
