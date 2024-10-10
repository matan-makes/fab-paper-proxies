import { Card } from '@flesh-and-blood/types';
import React from 'react';
import { WithClassName } from '../types';
import Markdown from 'react-markdown';

interface CardProps extends WithClassName {
  card: Card;
}

const getPitchColor = (value: number): string => {
  switch (value) {
    case 1:
      return 'bg-red-600';
    case 2:
      return 'bg-yellow-400';
    case 3:
      return 'bg-blue-500';
    default:
      return '';
  }
};

const Pitch = ({ value }: { value?: number }) => {
  if (value) {
    return (
      <div className="flex h-auto items-center gap-1">
        {[...new Array(value)].map((v, index) => {
          const bgColor = getPitchColor(value);
          return (
            <div
              key={`p-${index}`}
              className={`h-3 w-3 rounded-full ${bgColor}`}
            />
          );
        })}
      </div>
    );
  }
};

const CardBottomRight = ({ card }: { card: Card }) => {
  const label = card.life || card.specialLife ? 'LIFE' : 'DEF';
  const value =
    (card.life || card.specialLife) ?? (card.defense || card.specialDefense);

  if (!value) {
    return;
  }

  return (
    <div className="text-right">
      <label>{label}: </label>
      <span>{value}</span>
    </div>
  );
};

const CardBottomLeft = ({ card }: { card: Card }) => {
  const label = card.intellect ? 'INT' : 'ATK';
  const value = card.intellect ?? (card.power || card.specialPower);

  if (!value) {
    return;
  }

  return (
    <div>
      <label>{label}: </label>
      <span>{value}</span>
    </div>
  );
};

const CardItem = ({ card, className }: CardProps) => {
  return (
    <div
      className={`grid max-h-96 grid-cols-4 grid-rows-12 gap-2 rounded-xl border-2 border-black
        p-3 dark:border-white ${className}`}
    >
      <h1 className="col-span-2 col-start-1 row-start-1 row-end-2 text-xl">
        {card.name}
      </h1>
      <div className="col-span-2 row-start-1 row-end-2 text-right">
        {`${card.cost?.toString() !== undefined ? 'Cost: ' : ''}${card.cost?.toString() || ''}`}
      </div>
      <div className="col-span-full row-start-2 row-end-3 my-auto">
        <Pitch value={card.pitch} />
      </div>
      <div className="col-span-full row-start-3 row-end-4 italic">
        {card.typeText}
      </div>
      <Markdown className="col-span-full row-start-4 row-end-12 py-4">
        {card.functionalText}
      </Markdown>

      <div className="col-start-1 col-end-2 row-start-12 row-end-13">
        <CardBottomLeft card={card} />
      </div>
      <div className="col-start-4 col-end-5 row-start-12 row-end-13">
        <CardBottomRight card={card} />
      </div>
    </div>
  );
};

export default CardItem;
