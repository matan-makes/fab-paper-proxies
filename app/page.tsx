import DeckList from "./components/DeckList";
import MainActions from "./components/MainActions";
import SearchResults from "./components/SearchResults";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-4 grid-rows-12 p-4 gap-4">
      <MainActions />
      <SearchResults />
      <DeckList />
      <footer className="row-start-12 col-span-full flex gap-6 flex-wrap items-center justify-center bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
        footer
      </footer>
    </div>
  );
}
