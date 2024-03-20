import React from 'react'
import Image from "next/future/image"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from '../../firebase'
import Header from '../../components/Header'
import { useEffect } from 'react';
const Login = () => {
    const login = async () => {
        await signInWithPopup(auth, provider);
    }
    useEffect(() => {
      document.title = "Home login";
    }, []);
  return (
    <main className="flex flex-col items-center h-[100vh] bg-neutral-950">
          <Header />
      <div className="flex flex-wrap items-center justify-center h-[100vh]">
        <div className="flex flex-col max-sm:top-[30px] items-center justify-center relative bottom-10">
            <h1 className="text-5xl relative right-[45px] text-slate-50 max-sm:text-[25px] max-sm:right-[30px] ">
                Welcome to <span className=" font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">Ourchat</span>
            </h1>
            <p className="w-[550px] mt-5 text-[20px] mt-5 items-center text-justify max-sm:w-[300px] max-sm:mt-2 max-sm:text-[15px] text-slate-50">Ourchat é um aplicativo de mensagens que visa proporcionar uma experiência de comunicação simples e intuitiva entre os usuários. Com um design limpo e amigável, o aplicativo permite que os usuários troquem mensagens de texto<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="bottom-[26px] left-[202px] relative max-sm:left-[282px] max-sm:w-[15px] max-sm:bottom-6  lucide lucide-badge-check text-blue-600"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg></p>

            <div className="max-sm:w-[300px] w-[560px] relative text-[20px] max-sm:bottom-5 max-sm:right-1 space-y-1 max-sm:text-[10px]">
            <div className="flex space-x-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradiente1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check max-sm:w-[20px]">
                <defs>
                  <linearGradient id="gradiente1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(30,64,175)" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">Sempre protegendo o usuário</h1>
            </div>

            <div className="flex space-x-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradiente2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide max-sm:w-[20px] lucide-earth">
                <defs>
                  <linearGradient id="gradiente2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(30,64,175)" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/>
                <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/>
                <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">Converse com seus amigos do mundo inteiro</h1>
            </div>

            <div className="flex space-x-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradiente6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="max-sm:w-[20px] lucide lucide-laptop">
            <defs>
              <linearGradient id="gradiente6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(30,64,175)" stopOpacity="1" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
            </svg>
              <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">Interface amigável</h1>
            </div>

            </div>
            <div className="flex space-x-2 mt-10">
              <button onClick={login} className="max-sm:bottom-[30px] w-[300px] max-sm:w-[220px] text-[19px] max-sm:text-[13px] relative justify-evenly text-center flex items-center p-[10px] bg-slate-50  text-black font-bold rounded-[15px] ">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <h1 className='text-center'>
                Entre agora com Google
              </h1>
              </button>
            </div>  
        </div>
        
        <div>
          <Image
          src="/images/fala-ai.png"
          alt="Descrição da imagem"
          height={600} // Largura da imagem
          width={600}
          className='max-sm:w-[300px] relative max-sm:bottom-[25px]'
          />
        </div>
    </div>
    </main>
  )
}

export default Login