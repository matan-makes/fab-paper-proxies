import { useMemo } from 'react';
import DeckList from './components/DeckList';
import MainActions from './components/MainActions';
import SearchResults from './components/SearchResults';
import { cards } from '@flesh-and-blood/cards';

export default function Home() {
  console.log(cards.length);
  const results = useMemo(() => cards, [cards]);
  return (
    <div className="grid max-h-screen grid-cols-4 grid-rows-12 gap-4 p-4">
      <MainActions className="col-span-full row-start-1 row-end-4" />
      <SearchResults
        className="col-start-1 col-end-4 row-start-4 row-end-12"
        results={results}
      />
      <DeckList
        decklist={[]}
        className="col-start-4 col-end-5 row-start-4 row-end-12"
      />
      <footer
        className="col-span-full row-start-12 flex flex-wrap items-center justify-center gap-6
          rounded-md bg-slate-100 p-3 dark:bg-slate-800"
      >
        footer
      </footer>
    </div>
  );
}
