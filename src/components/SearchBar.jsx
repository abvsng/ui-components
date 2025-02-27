import { SearchIcon } from "../svg/SearchIcon";
export function SearchBar() {
  return (
    <>
      <div className="flex flex-row relative">
        <button className=" bg-slate-200 hover:bg-slate-300">
          <SearchIcon />
        </button>
        <input type="text" placeholder="Search" />
      </div>
    </>
  );
}
