import { useMemo } from 'react';
import DeckList from './components/DeckList';
import MainActions from './components/MainActions';
import SearchResults from './components/SearchResults';
import { cards } from '@flesh-and-blood/cards';

export default function Home() {
  console.log(cards.length);
  const results = useMemo(() => cards, [cards]);
  return (
    <div className="max-h-screen grid grid-cols-4 grid-rows-12 p-4 gap-4">
      <MainActions />
      <SearchResults
        className="row-start-4 row-end-12 col-start-1 col-end-4"
        results={results}
      />
      <DeckList
        decklist={[]}
        className="row-start-4 row-end-12 col-start-4 col-end-5"
      />
      <footer className="row-start-12 col-span-full flex gap-6 flex-wrap items-center justify-center bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
        footer
      </footer>
    </div>
  );
}
