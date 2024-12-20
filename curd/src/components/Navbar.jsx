import React from 'react'
import { User, User2, LogInIcon, LogsIcon, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' sticky top-8 w-[90%] gap-4 h-20 mb-8 bg-gradient-to-br from-[#66d5f0] to-[#44ebbc] rounded-2xl p-8 border
     border-gray-800/50 overflow-hidden  items-center justify-between flex'>
      <div>
        <LogsIcon className='w-6 h-6 text-white' />
      </div>
      <div className='relative w-full max-w-sm'>
        <Search className='absolute  left-[80%] top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 ' />
        <input type="text"
          placeholder='Search...'
          className='w-full  py-2 rounded-lg p-3 border border-gray-800/50 text-white '

        />
        

      </div>

    </div>
  )
}

export default Navbar
