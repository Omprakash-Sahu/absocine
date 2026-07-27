import SearchToggleButton from './SearchToggleButton';
import { useEffect, useRef } from 'react';

function SearchBox({ isSearchOpen, setIsSearchOpen, setSearchTerm }) {

    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div className="flex gap-2 w-full h-12 px-3 py-2">
            <input ref={inputRef} className="text-sm text-gray-100 px-0.5 w-full h-7 bg-transparent border-b border-gray-400/60 outline-none" type="text" placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)}/>
            <SearchToggleButton isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
        </div>
    )

}

export default SearchBox;