import React from "react";
import { WithClassName } from "../types";
import { Card } from "@flesh-and-blood/types";

interface DeckListProps extends WithClassName {
  decklist: Card[];
}

const DeckList = ({ className }: DeckListProps) => {
  return (
    <div
      className={`${className}  bg-slate-100 dark:bg-slate-800 p-3 rounded-md`}
    >
      DeckList
    </div>
  );
};

export default DeckList;
