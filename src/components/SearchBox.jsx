import SearchToggleButton from './SearchToggleButton';

function SearchBox({ isSearchOpen, setIsSearchOpen }) {

    return (
        <div className="flex gap-2 w-full h-12 px-3 py-2">
            <input className="text-sm text-gray-100 px-0.5 mt-0.5 w-full h-6 bg-transparent border-b border-gray-400 outline-none" type="text" placeholder='Search'/>
            <SearchToggleButton isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
        </div>
    )

}

export default SearchBox;