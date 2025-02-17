import { Trophy } from 'lucide-react'
import { MenubarNavbar } from './Menu'

const Navbar = () => {
    return (
        <div className='text-green-700 flex text-2xl flex-row justify-between items-center gap-4 p-10'>
            <div className='flex gap-2'>
                <Trophy className='w-8 h-8'/>
                <h1 className='poppins-bold'>MyLeague</h1>
            </div>
            <div className='flex gap-2 items-center'>                
                <MenubarNavbar/>
            </div>    
        </div>
    )
}

export default Navbar