import React from 'react'
import Image from "next/future/image";



const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen overflow-hidden bg-[#16162100]'>
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        </div>
    </div>
  )
}

export default Loading