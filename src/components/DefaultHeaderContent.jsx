import SearchToggleButton from "./SearchToggleButton";

function DefaultHeaderContent({ isSearchOpen, setIsSearchOpen }) {
    return (
        <div className="flex items-center justify-between p-3">
            <a href="/" className='cursor-pointer'>
                <span className="text-white text-base font-bold">AbsoCine</span>
            </a>
            <div className="flex items-center gap-5">
                <a href="#" className="text-white text-sm font-bold">About</a>
                <SearchToggleButton isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
            </div>
        </div>
    )
}

export default DefaultHeaderContent;