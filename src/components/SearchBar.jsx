import { SearchIcon } from "../svg/SearchIcon";
export function SearchBar() {
  return (
    <>
      <div className="flex flex-row relative">
        <button className=" bg-slate-300 hover:bg-slate-200 cursor-pointer rounded-full p-3 absolute left-0">
          <SearchIcon />
        </button>
        <input type="text" placeholder="Search" className="pl-11 outline-none bg-slate-100 hover:bg-slate-200 rounded-full py-2 "/>
      </div>
    </>
  );
}
