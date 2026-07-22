import { Search, X } from 'lucide-react';

function SearchToggleButton({ isSearchOpen, setIsSearchOpen}) {
    return (
        <button type="button" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label={isSearchOpen ? "Close search" : "Open search"} >
            {isSearchOpen ? <X className='w-5 h-5 text-white stroke-2' /> : <Search className='w-5 h-5 text-white stroke-3'/>}
        </button>
    )
}

export default SearchToggleButton;