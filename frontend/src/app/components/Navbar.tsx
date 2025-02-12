import { Trophy } from 'lucide-react'
import { SelectNavbar } from './Select'

const Navbar = () => {
    return (
        <div className='text-green-700 flex text-2xl flex-row justify-between items-center gap-4 p-10'>
            <div className='flex gap-2'>
                <Trophy className='w-8 h-8'/>
                <h1 className='poppins-bold'>MyLeague</h1>
            </div>
            <div>
                <SelectNavbar/>
            </div>    
        </div>
    )
}

export default Navbar