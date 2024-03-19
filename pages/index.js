'use client'
import React from "react";


export default function Home() {




  return (
    <div className='items-center justify-center w-full'>
        <div className="flex items-center justify-center">
            
            <div className="w-[100%] h-[100vh] bg-black">
                <div className=" w-[100%] items-center flex flex-col h-[100vh] justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"width="200" height="200"  viewBox="0 0 24 24" fill="none" stroke="url(#gradiente)" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-5 lucide lucide-message-circle-code">
                <defs>
                    <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(30,64,175)" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <path d="m10 10-2 2 2 2" />
                <path d="m14 10 2 2-2 2" />
                </svg>

                <h1 className="text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">Ourchat</h1>
                <p className="text-white">Olá! adicione um amigo para iniciar a conversa!</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
