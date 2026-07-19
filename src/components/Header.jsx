import { Search } from 'lucide-react';

function Header() {
    return (
        <div className="flex items-center justify-between p-3 sticky top-0 z-10 bg-background">
            <a href="/" className='cursor-pointer'>
                <span className="text-white text-base font-bold">AbsoCine</span>
            </a>
            <div className="flex items-center gap-5">
                <a href="#" className="text-white text-sm font-bold">About</a>
                <button type="button" aria-label="Search" className='cursor-pointer'>
                    <Search className='w-5 h-5 text-white stroke-3'/>
                </button>
            </div>
        </div>
    )
}

export default Header;